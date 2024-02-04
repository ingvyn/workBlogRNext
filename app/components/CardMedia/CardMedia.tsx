import { CardMediaProps } from './CardMedia.props';
import styles from './CardMedia.module.css';
import cn from 'classnames';

export const CardMedia = ({ src, context, className, ...props }: CardMediaProps): JSX.Element => {
	return (
		<div
			className={cn(className, {
				[styles.list]: context === 'list',
				[styles.post]: context === 'post'
			})}
			{...props}
		>
			{
				<img src={src} alt='Тестовое изображение' />
			}
		</div>
	);
};