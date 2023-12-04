import { PostItem } from '@/interfaces/post.interface';

export const getSelectedPosts = async (): Promise<PostItem[]> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/posts`);
	const posts: PostItem[] = await res.json();
	return posts.slice(0, 9);
};

export const getPost = async (id: string): Promise<PostItem | null> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/posts/${id}`);
	if (!res.ok) {
		return null;
	}
	return res.json();
};