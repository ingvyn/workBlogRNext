import { PostItem } from '@/interfaces/post.interface';
import { Htag, LikeButton, onLike, P, SampleCard } from "./components";
import styles from './page.module.css';

const getPosts = async (): Promise<PostItem[]> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/posts`);
	return res.json();
};
export default async function Home() {
	const posts = await getPosts();
	const selectedPosts = posts && posts.filter(({ id }) => id < 10);
	return (
		<div className={styles.blogGrid}>
			{selectedPosts && selectedPosts.map(({ id, title, body }) => {
				return (
					<SampleCard key={id}>
						<Htag tag='h4'>
							{title}
						</Htag>
						<P>
							{body}
						</P>
					</SampleCard>
				);
			})}
			<LikeButton post={1} onLike={onLike} />
		</div>
	);
}
