'use client';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import { Tag } from '../Tag/Tag';
import { Likes } from '../Likes/Likes';
import { Htag } from '../Htag/Htag';
import { P } from '../P/P';
import { CardMedia } from '../CardMedia/CardMedia';
import { CardItems } from '../CardItems/CardItems';
import { pluralize } from '../../utils/pluralize';
import { SampleCardProps } from './SampleCard.props';
import Link from 'next/dist/client/link';
import { ForwardedRef, forwardRef, useState, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';

export const SampleCard = motion(forwardRef<HTMLDivElement, SampleCardProps>(({ postId, title, body, ...props }: SampleCardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [keyNavigationEnabled, setKeyNavigationEnabled] = useState<boolean>(false);
	const enableCardNavigation = (key: KeyboardEvent) => {
		if (key.code == 'Space' || key.code == 'Enter') {
			if (key.code == 'Space') key.preventDefault();
			setKeyNavigationEnabled(true);
		}
		if (key.code == 'Tab' && (key.target as Element).id === `lastTabSampleCard${postId}` && key.shiftKey == false) {
			setKeyNavigationEnabled(false);
		}
	};
	return (
		<div {...props} ref={ref}
			onKeyDown={(event: KeyboardEvent) => enableCardNavigation(event)}
		>
			<Card>
				<CardMedia src="cardMedia-Safari (Catalina) - Dark 1.png" context='list' tabIndex={keyNavigationEnabled ? 0 : -1} />
				<CardItems lay='col' className='gap-8'>
					<CardItems id='tagSection' lay='row' className='gap-6' aria-label='Теги'>
						<CardItems lay='inline' className='gap-6'>
							<Tag id='tagSectionTag1'
								tabIndex={keyNavigationEnabled ? 0 : -1}
								aria-labelledby='tagSection tagSectionTag1'
							>
								Frontend
							</Tag>
							<span>·</span>
							<Tag tabIndex={keyNavigationEnabled ? 0 : -1}>
								1 месяц назад
							</Tag>
						</CardItems>
						<Likes quantity={4}
							tabIndex={keyNavigationEnabled ? 0 : -1} />
					</CardItems>
					<CardItems lay='col'>
						<Htag tag='h4' tabIndex={keyNavigationEnabled ? 0 : -1}>
							{title}
						</Htag>
						<P tabIndex={keyNavigationEnabled ? 0 : -1}>
							{body}
						</P>
					</CardItems>
				</CardItems>
				<CardItems id='readSection' lay='row' className='gap-6' aria-label='Для чтения потребуется'>
					<Tag id='readSectionTag1'
						tabIndex={keyNavigationEnabled ? 0 : -1}
						aria-labelledby='readSection readSectionTag1'
					>
						{`3 ${pluralize(3, ['минута', 'минуты', 'минут'])}`}
					</Tag>
					<Link href={`/post/${postId}`} tabIndex={-1}>
						<Button id={`lastTabSampleCard${postId}`} appearance='primary'
							tabIndex={keyNavigationEnabled ? 0 : -1}
							aria-label='Нажмите, чтобы открыть страницу поста'
						>
							Читать
							<img src="Button-icon-arrow.png" aria-hidden='true' />
						</Button>
					</Link>
				</CardItems>
			</Card>
		</div>
	);
}));