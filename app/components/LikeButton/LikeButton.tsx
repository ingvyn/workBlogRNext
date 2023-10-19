import styles from './LikeButton.module.css';
import { LikeButtonProps } from './LikeButton.props';
import cn from 'classnames';
import LikeIcon from './like-icon.svg';
import { useEffect, useState } from 'react';

export const LikeButton = ({ className, ...rest }: LikeButtonProps): JSX.Element => {
	const [liked, setLiked] = useState<boolean>(false);
	let postData: { userId: number, id: number, title: string, body: string };

	const getPost = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
			method: 'GET',
		});
		postData = await response.json();
	};

	const patchData = async () => {
		await fetch('https://jsonplaceholder.typicode.com/posts/1', {
			method: 'PATCH',
			body: JSON.stringify(postData),
			headers: {
				'Content-type': 'application/json'
			}
		});
	};

	useEffect(() => {
		patchData();
		return () => {
			getPost();
		};
	}, [liked]);

	return (
		<button
			className={cn(styles.common, className, {
				[styles.liked]: liked === true,
				[styles.notLiked]: liked === false,
			})}
			onClick={() => setLiked(!liked)}
			{...rest}
		>
			<LikeIcon></LikeIcon>
		</button>
	);
};
