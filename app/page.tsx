import { Htag, LikeButton, onLike, P, SampleCard } from "./components";
import { getSelectedPosts } from '@/api/posts';
import styles from './page.module.css';

export default async function Home() {
	const selectedPosts = await getSelectedPosts();
	return (
		<div className={styles.blogGrid}>
			{selectedPosts.map(({ id, title, body }) => {
				return (
					<SampleCard postId={id} key={id}>
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
