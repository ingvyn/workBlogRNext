import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface LikeButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'liked' | 'nonLiked';
}