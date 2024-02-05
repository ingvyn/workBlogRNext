import { getSelectedPosts, getPost } from '@/api/posts';
import { PostItem } from '@/interfaces/post.interface';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Tag, Likes, Htag, LikeButton, onLike, CommentsForm } from '@/app/components/';
import { PostComments } from '@/app/components/PostComments/PostComments';
import styles from './page.module.css';
import { formatDistance, subDays } from 'date-fns';
import { ru } from 'date-fns/locale';
import { pluralize } from '@/app/utils/pluralize';

export async function generateStaticParams() {
	const posts: PostItem[] = await getSelectedPosts();
	return posts.map(({ id }) => ({ id: id.toString() }));
}

export const metadata: Metadata = {
	title: 'Страница поста',
};

const getPostDescription = async () => {
	return { topic: 'Frontend', duration: 3, period: 32 };
};

export default async function Post({ params }: { params: { id: string } }) {
	const post = await getPost(params.id);
	if (!post) {
		notFound();
	}
	const { topic, duration, period } = await getPostDescription();
	const periodTag = `${formatDistance(subDays(new Date(), period), new Date(), { locale: ru })} назад`;
	const durationTag = `${duration} ${pluralize(duration, ['минута', 'минуты', 'минут'])}`;
	const { title, body } = post;
	const id = Number(params.id);
	return (
		<div className={styles.wrapper}>
			<Htag tag='h2' tabIndex={0}>
				{title}
			</Htag>
			<div className={styles.inline}>
				<Tag tabIndex={0}>{topic}</Tag>
				<span>·</span>
				<Tag tabIndex={0}>{periodTag}</Tag>
				<span>·</span>
				<Tag tabIndex={0}>{durationTag}</Tag>
				<span>·</span>
				<Likes quantity={4} tabIndex={0} />
			</div>
			<img
				className={styles.postImage}
				src="Safari (Catalina) - Dark 1.png"
				alt='Тестовое изображение поста'
				tabIndex={0}
			/>
			{body && <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: body }}
				tabIndex={0}></div>}
			<div className={styles.likesPress}>
				<span tabIndex={0}>Понравилось? Жми</span>
				<LikeButton post={id} onLike={onLike} />
			</div>
			<PostComments post={id} />
			<CommentsForm post={id} />
		</div>
	);
}