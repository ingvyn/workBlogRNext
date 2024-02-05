import styles from './LikeButton.module.css';
import { LikeButtonProps } from './LikeButton.props';
import cn from 'classnames';
import LikeIcon from './like-icon.svg';
import { useEffect, useState } from 'react';

export const LikeButton = ({ className, post, onLike, ...rest }: LikeButtonProps): JSX.Element => {
	const [liked, setLiked] = useState<boolean>(false);

	useEffect(() => {
		onLike(post);
	}, [liked]);

	return (
		<button
			className={cn(styles.common, className, {
				[styles.liked]: liked === true,
				[styles.notLiked]: liked === false,
			})}
			onClick={() => setLiked(!liked)}
			{...rest}
			aria-label={`Нажмите, чтобы ${liked ? 'снять лайк' : 'поставить лайк'}`}
		>
			<LikeIcon></LikeIcon>
		</button>
	);
};
