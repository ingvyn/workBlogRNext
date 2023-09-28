import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

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
			<body className={open_sans.className}>{children}</body>
		</html>
	);
}
