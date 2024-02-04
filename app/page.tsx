import { SampleCard } from "./components";
import { getSelectedPosts } from '@/api/posts';
import styles from './page.module.css';

export default async function Home() {
	const selectedPosts = await getSelectedPosts();
	const variants = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};
	return (
		<div className={styles.blogGrid}>
			{selectedPosts.map(({ id, title, body }, i) => {
				return (
					<SampleCard postId={id}
						title={title}
						body={body}
						key={id}
						custom={i}
						variants={variants}
						transition={{ delay: i * 0.1 }}
						initial='hidden'
						animate='visible'
						aria-label={`Карточка поста ${title}. Нажмите для навигации внутри карточки`}
						tabIndex={0}
					/>
				);
			})}
		</div>
	);
}
