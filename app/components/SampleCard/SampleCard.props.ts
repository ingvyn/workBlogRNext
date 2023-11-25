import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SampleCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	postId: number;
}