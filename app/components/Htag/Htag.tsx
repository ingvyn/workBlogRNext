import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 className={styles.h1} tabIndex={0}>{children}</h1>;
		case 'h2':
			return <h2 className={styles.h2} tabIndex={0}>{children}</h2>;
		case 'h3':
			return <h3 className={styles.h3} tabIndex={0}>{children}</h3>;
		case 'h4':
			return <h4 className={styles.h4} tabIndex={0}>{children}</h4>;
		default:
			return <></>;
	}
};