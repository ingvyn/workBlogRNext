import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ className, children, ...props }: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, {
			})}
			{...props}
		>
			{children}
		</div>
	);
};