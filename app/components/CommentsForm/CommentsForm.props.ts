import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CommentsFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	post: number;
}