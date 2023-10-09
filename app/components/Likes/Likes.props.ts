import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LikesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	quantity: number;
}