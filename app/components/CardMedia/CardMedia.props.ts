import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardMediaProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	src: string;
}