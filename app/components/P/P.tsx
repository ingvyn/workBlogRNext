import { ParagraphProps } from "./P.props";
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ size = 's', children, className, ...rest }: ParagraphProps): JSX.Element => {
	return <p
		className={
			cn(className, styles.p, {
				[styles.s]: size == 's',
				[styles.m]: size == 'm',
				[styles.l]: size == 'l',
			}
			)}
		{...rest}
	>
		{children}
	</p>;
};