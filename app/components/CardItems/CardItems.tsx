import { CardItemsProps } from './CardItems.props';
import styles from './CardItems.module.css';
import cn from 'classnames';

export const CardItems = ({ lay, children, className, ...props }: CardItemsProps): JSX.Element => {
	return (
		<div
			className={cn(className, {
				[styles.inline]: lay == 'inline',
				[styles.row]: lay == 'row',
				[styles.col8gap]: lay == 'col8gap',
				[styles.col0gap]: lay == 'col0gap'
			})}
			{...props}
		>
			{children}
		</div>
	);
};