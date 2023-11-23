import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SampleCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}