'use client';

import { LikeButton, onLike, SampleCard } from "./components";
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.blogGrid}>
			<SampleCard />
			<SampleCard />
			<SampleCard />
			<SampleCard />
			<LikeButton post={1} onLike={onLike} />
		</div>
	);
}
