import { getSelectedPosts, getPost } from '@/api/posts';
import { PostItem } from '@/interfaces/post.interface';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CardMedia, CardItems, Tag, Likes, Htag, LikeButton, onLike } from '@/app/components/';
import styles from './page.module.css';

export async function generateStaticParams() {
	const posts: PostItem[] = await getSelectedPosts();
	return posts.map(({ id }) => ({ id: id.toString() }));
}

export const metadata: Metadata = {
	title: 'Страница поста',
};

export default async function Post({ params }: { params: { id: string } }) {
	const post = await getPost(params.id);
	if (!post) {
		notFound();
	}
	const { title, body } = post;
	const id = Number(params.id);
	return (
		<div className={styles.wrapper}>
			<Htag tag='h2'>
				{title}
			</Htag>
			<CardItems lay='inline' className='gap-12'>
				<Tag>Frontend</Tag>
				<span>·</span>
				<Tag>1 месяц назад</Tag>
				<span>·</span>
				<Tag>3 минуты</Tag>
				<span>·</span>
				<Likes quantity={4} />
			</CardItems>
			<CardMedia src="Safari (Catalina) - Dark 1.png" context='post' />
			{body && <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: body }}></div>}
			<div className={styles.likesPress}>
				<span>Понравилось? Жми</span>
				<LikeButton post={id} onLike={onLike} />
			</div>
		</div>
	);
}