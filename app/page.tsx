import { Card, Htag, Button, P, Likes, CardMedia } from "./components";

export default function Home() {
	return (
		<div>
			<Htag tag='h1'>.my_blog</Htag>
			<Card>
				<CardMedia src="cardMedia-Safari (Catalina) - Dark 1.png" />
				<div className="flex-row">
					<Likes quantity={4} />
				</div>
			</Card>
		</div>
	);
}
