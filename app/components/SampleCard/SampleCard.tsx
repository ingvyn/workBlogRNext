import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import { Tag } from '../Tag/Tag';
import { Likes } from '../Likes/Likes';
import { CardMedia } from '../CardMedia/CardMedia';
import { CardItems } from '../CardItems/CardItems';
import { pluralize } from '../../utils/pluralize';
import { SampleCardProps } from './SampleCard.props';

export const SampleCard = ({ children, ...props }: SampleCardProps): JSX.Element => {
	return (
		<Card {...props}>
			<CardMedia src="cardMedia-Safari (Catalina) - Dark 1.png" />
			<CardItems lay='col8gap'>
				<CardItems lay='row'>
					<CardItems lay='inline'>
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
				<Button appearance='primary'>
					Читать
					<img src="Button-icon-arrow.png" />
				</Button>
			</CardItems>
		</Card>
	);
};