import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';

const getDevAccount = async () => {
	return {
		href: 'https://github.com/ingvyn',
		image: 'icon-github.svg'
	};
};

export const Header = async ({ className, children, ...props }: HeaderProps): Promise<JSX.Element> => {
	const devAccount = await getDevAccount();
	return (
		<div
			className={cn(styles.blogHeader, className, {
			})}
			{...props}
		>
			{children}
			{
				devAccount && (
					<a href={devAccount.href} aria-label='Ссылка на github разработчика'>
						<img src={devAccount.image} aria-hidden='true' />
					</a>
				)
			}
		</div>
	);
};