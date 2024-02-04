import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Htag } from './components';
import { Header } from './components/Header/Header';

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
					<Header>
						<Htag tag='h1' tabIndex={0}>Блог на гридах</Htag>
					</Header>
					{children}
				</div>
			</body>
		</html>
	);
}
