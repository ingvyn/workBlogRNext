import styles from './LikeButton.module.css';
import { LikeButtonProps } from './LikeButton.props';
import cn from 'classnames';
import LikeIcon from './like-icon.svg';

export const LikeButton = ({ appearance, className, ...rest }: LikeButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.common, className, {
				[styles.liked]: appearance == 'liked',
				[styles.nonLiked]: appearance == 'nonLiked',
			})}
			{...rest}
		>
			<LikeIcon></LikeIcon>
		</button>
	);
};
