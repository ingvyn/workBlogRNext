import { CardItemsProps } from './CardItems.props';
import styles from './CardItems.module.css';
import cn from 'classnames';

export const CardItems = ({ lay, children, className, ...props }: CardItemsProps): JSX.Element => {
	return (
		<div
			className={cn(className, {
				[styles.inline]: lay == 'inline',
				[styles.row]: lay == 'row',
				[styles.col]: lay == 'col',
			})}
			{...props}
		>
			{children}
		</div>
	);
};