import { Card, Htag, Button, P, Likes, Tag, CardMedia, CardItems } from "./components";

export default function Home() {
	return (
		<div>
			<Htag tag='h1'>.my_blog</Htag>
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
							Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.
						</P>
					</CardItems>
				</CardItems>
				<CardItems lay='row'>
					<Tag>3 минуты</Tag>
					<Button appearance='primary'>
						Читать
					</Button>
				</CardItems>
			</Card>
		</div>
	);
}
