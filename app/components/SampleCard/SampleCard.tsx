'use client';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import { Tag } from '../Tag/Tag';
import { Likes } from '../Likes/Likes';
import { CardMedia } from '../CardMedia/CardMedia';
import { CardItems } from '../CardItems/CardItems';
import { pluralize } from '../../utils/pluralize';
import { SampleCardProps } from './SampleCard.props';
import Link from 'next/dist/client/link';
import { ForwardedRef, forwardRef } from 'react';
import { motion } from 'framer-motion';

export const SampleCard = motion(forwardRef<HTMLDivElement, SampleCardProps>(({ children, postId, ...props }: SampleCardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	return (
		<div {...props} ref={ref}>
			<Card>
				<CardMedia src="cardMedia-Safari (Catalina) - Dark 1.png" context='list' />
				<CardItems lay='col' className='gap-8'>
					<CardItems lay='row' className='gap-6'>
						<CardItems lay='inline' className='gap-6'>
							<Tag>Frontend</Tag>
							<span>·</span>
							<Tag>1 месяц назад</Tag>
						</CardItems>
						<Likes quantity={4} />
					</CardItems>
					<CardItems lay='col'>
						{children}
					</CardItems>
				</CardItems>
				<CardItems lay='row' className='gap-6'>
					<Tag>{`3 ${pluralize(3, ['минута', 'минуты', 'минут'])}`}</Tag>
					<Link href={`/post/${postId}`}>
						<Button appearance='primary'>
							Читать
							<img src="Button-icon-arrow.png" />
						</Button>
					</Link>
				</CardItems>
			</Card>
		</div>
	);
}));