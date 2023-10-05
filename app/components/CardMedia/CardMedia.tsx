import { CardMediaProps } from './CardMedia.props';
import styles from './CardMedia.module.css';
import cn from 'classnames';

export const CardMedia = ({ src, className, ...props }: CardMediaProps): JSX.Element => {
	return (
		<div
			className={cn(styles.mini, className, {
			})}
			{...props}
		>
			{
				<img src={src} />
			}
		</div>
	);
};