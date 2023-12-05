import { getSelectedPosts, getPost } from '@/api/posts';
import { Htag } from '@/app/components';
import { PostItem } from '@/interfaces/post.interface';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CardMedia, CardItems, Tag, Likes } from '@/app/components/';
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
			{body}
		</div>
	);
}