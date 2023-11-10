'use client';

import { Card, Htag, Button, P, Likes, Tag, CardMedia, CardItems, LikeButton } from "./components";
import { pluralize } from './utils/pluralize';
import styles from './page.module.css';
import { setLikes } from './utils/setLikes';

export default function Home() {
	return (
		<div className={styles.blogGrid}>
			<Card>
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
						<Htag tag='h4'>
							Как работать с CSS Grid
						</Htag>
						<P>
							<span className="underline">Грид-раскладка (CSS Grid Layout)</span> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.
						</P>
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
			<Card>
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
						<Htag tag='h4'>
							Как работать с CSS Grid
						</Htag>
						<P>
							<span className="underline">Грид-раскладка (CSS Grid Layout)</span> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.
						</P>
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
			<Card>
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
						<Htag tag='h4'>
							Как работать с CSS Grid
						</Htag>
						<P>
							<span className="underline">Грид-раскладка (CSS Grid Layout)</span> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.
						</P>
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
			<Card>
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
						<Htag tag='h4'>
							Как работать с CSS Grid
						</Htag>
						<P>
							<span className="underline">Грид-раскладка (CSS Grid Layout)</span> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.
						</P>
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
			<LikeButton post={1} onLike={setLikes} />
		</div>
	);
}
