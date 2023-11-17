import { PostItem } from '@/interfaces/post.interface';
import { LikeButton, onLike, SampleCard } from "./components";
import styles from './page.module.css';

const getPosts = async (): Promise<PostItem[]> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/posts`);
	return res.json();
};
export default async function Home() {
	const posts = await getPosts();
	const selectedPosts = posts.filter(({ id }) => id < 10);
	return (
		<div className={styles.blogGrid}>
			<SampleCard />
			<SampleCard />
			<SampleCard />
			<SampleCard />
			<LikeButton post={1} onLike={onLike} />
			{selectedPosts.map(({ id, title }) => (<div key={id}>{`${id}. ${title}`}</div>))}
		</div>
	);
}
