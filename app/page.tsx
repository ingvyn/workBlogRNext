import { Htag, Button, P } from "./components";

export default function Home() {
	return (
		<div>
			<Htag tag='h3'>Текст</Htag>
			<P>Маленький текст</P>
			<P size='m'>Средний текст</P>
			<P size='l'>Большой текст</P>
			<Button appearance='primary'>Читать</Button>
		</div>
	);
}
