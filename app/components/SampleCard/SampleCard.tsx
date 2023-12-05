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

export const SampleCard = ({ children, postId, ...props }: SampleCardProps): JSX.Element => {
	return (
		<div {...props}>
			<Card>
				<CardMedia src="cardMedia-Safari (Catalina) - Dark 1.png" context='list' />
				<CardItems lay='col8gap'>
					<CardItems lay='row'>
						<CardItems lay='inline' className='gap-6'>
							<Tag>Frontend</Tag>
							<span>·</span>
							<Tag>1 месяц назад</Tag>
						</CardItems>
						<Likes quantity={4} />
					</CardItems>
					<CardItems lay='col0gap'>
						{children}
					</CardItems>
				</CardItems>
				<CardItems lay='row'>
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
};