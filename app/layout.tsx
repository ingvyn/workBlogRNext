import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Header, Htag } from './components';

const open_sans = Open_Sans({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
	title: 'Тестовый блог',
	description: 'Спроектирован для изучения Next.js 13',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<body className={open_sans.className}>
				<div className="wrapper">
					<Header className='header'>
						<Htag tag='h1'>Блог на гридах</Htag>
						<a href='https://github.com/ingvyn'>
							<img src='icon-github.svg' />
						</a>
					</Header>
					<div className="blog">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
