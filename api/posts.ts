import { PostItem } from '@/interfaces/post.interface';

export const getSelectedPosts = async (): Promise<PostItem[]> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/posts`);
	const posts: PostItem[] = await res.json();
	return posts && posts.filter(({ id }) => id < 10);
};

export const getPost = async (id: string): Promise<PostItem> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/posts/${id}`);
	return res.json();
};