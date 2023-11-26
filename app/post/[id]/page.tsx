import { getSelectedPosts, getPost } from '@/api/posts';
import { Htag } from '@/app/components';
import { PostItem } from '@/interfaces/post.interface';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

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
		<div>
			<Htag tag='h2'>
				{title}
			</Htag>
			{body}
		</div>
	);
}