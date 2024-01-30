import { LikesProps } from './Likes.props';
import styles from './Likes.module.css';
import cn from 'classnames';
import { pluralize } from '@/app/utils/pluralize';

export const Likes = ({ quantity, className, ...props }: LikesProps): JSX.Element => {
	return (
		<div
			className={cn(styles.likes, className, {
			})}
			{...props}
		>
			{quantity}
			<img className={styles.img} src="SWM icons-outline-like.svg" aria-label={`${pluralize(quantity, ['лайк', 'лайка', 'лайков'])}`} />
		</div>
	);
};