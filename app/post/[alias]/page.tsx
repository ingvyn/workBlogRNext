import { getSelectedPosts, getPost } from '@/api/posts';
import { Htag } from '@/app/components';
import { PostItem } from '@/interfaces/post.interface';
import { Metadata } from 'next';

export async function generateStaticParams() {
	const posts: PostItem[] = await getSelectedPosts();
	return posts.map(({ id }) => ({ alias: id.toString() }));
}

export const metadata: Metadata = {
	title: 'Страница поста',
};

export default async function Post({ params }: { params: { alias: string } }) {
	const { title, body } = await getPost(params.alias);
	return (
		<div>
			<Htag tag='h2'>
				{title}
			</Htag>
			{body}
		</div>
	);
}