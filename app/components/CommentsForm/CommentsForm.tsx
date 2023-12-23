import { CommentsFormProps } from './CommentsForm.props';
import styles from './CommentsForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';

export const CommentsForm = ({ post, className, ...props }: CommentsFormProps): JSX.Element => {
	return (
		<>
			<form>
				<div
					className={cn(styles.commentsForm, className)}
					{...props}
				>
					<Input placeholder='Имя' />
					<Textarea placeholder='Комментарий' />
					<Button appearance="secondary" type="submit">Отправить</Button>
				</div>
			</form>
		</>
	);
};