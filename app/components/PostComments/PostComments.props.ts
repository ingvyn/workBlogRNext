import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PostCommentsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	post: number;
}