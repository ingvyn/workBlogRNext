import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';

export const Header = ({ className, children, ...props }: HeaderProps): JSX.Element => {
	return (
		<div
			className={cn(styles.blogHeader, className, {
			})}
			{...props}
		>
			{children}
		</div>
	);
};