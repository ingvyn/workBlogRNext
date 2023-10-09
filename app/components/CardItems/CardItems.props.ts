import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	lay: 'inline' | 'row' | 'col0gap' | 'col8gap';
	children: ReactNode;
}