import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface LikeButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	post: number;
	onLike: (post: number) => Promise<void>;
}