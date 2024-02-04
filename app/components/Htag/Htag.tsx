import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

export const Htag = ({ tag, children, tabIndex }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 className={styles.h1} tabIndex={tabIndex}>{children}</h1>;
		case 'h2':
			return <h2 className={styles.h2} tabIndex={tabIndex}>{children}</h2>;
		case 'h3':
			return <h3 className={styles.h3} tabIndex={tabIndex}>{children}</h3>;
		case 'h4':
			return <h4 className={styles.h4} tabIndex={tabIndex}>{children}</h4>;
		default:
			return <></>;
	}
};