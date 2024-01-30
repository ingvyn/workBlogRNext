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
					<CardItems lay='row' className='gap-6' aria-label='Теги' tabIndex={0}>
						<CardItems id='cardTags' lay='inline' className='gap-6'>
							<Tag tabIndex={0}>Frontend</Tag>
							<span>·</span>
							<Tag tabIndex={0}>1 месяц назад</Tag>
						</CardItems>
						<Likes quantity={4} tabIndex={0} />
					</CardItems>
					<CardItems lay='col'>
						{children}
					</CardItems>
				</CardItems>
				<CardItems id='readSection' lay='row' className='gap-6' aria-label='Для чтения потребуется'>
					<Tag id='tag1' tabIndex={0} aria-labelledby='readSection tag1'>{`3 ${pluralize(3, ['минута', 'минуты', 'минут'])}`}</Tag>
					<Link href={`/post/${postId}`} tabIndex={-1}>
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