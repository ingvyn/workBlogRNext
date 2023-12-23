import { CommentsFormProps } from './CommentsForm.props';
import styles from './CommentsForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { useForm } from 'react-hook-form';
import { CommentForm } from '@/interfaces/commentForm.interface';

export const CommentsForm = ({ post, className, ...props }: CommentsFormProps): JSX.Element => {
	const { register, handleSubmit } = useForm<CommentForm>();

	const onSubmit = (data: CommentForm) => {
		console.log(data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div
					className={cn(styles.commentsForm, className)}
					{...props}
				>
					<Input {...register('name')} placeholder='Имя' />
					<Textarea {...register('comment')} placeholder='Комментарий' />
					<Button appearance='secondary' type='submit' className={styles.submit}>Отправить</Button>
				</div>
			</form>
		</>
	);
};