import { CommentsFormProps } from './CommentsForm.props';
import styles from './CommentsForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { useForm } from 'react-hook-form';
import { CommentForm } from '@/interfaces/commentForm.interface';

export const CommentsForm = ({ post, className, ...props }: CommentsFormProps): JSX.Element => {
	const { register, handleSubmit, formState: { errors } } = useForm<CommentForm>();

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
					<Input
						{...register('name', { required: { value: true, message: 'Заполните имя' } })}
						placeholder='Имя'
						error={errors.name}
					/>
					<Textarea
						{...register('comment', { required: { value: true, message: 'Добавьте комментарий' } })}
						placeholder='Комментарий'
						error={errors.comment}
					/>
					<Button appearance='secondary' type='submit' className={styles.submit}>Отправить</Button>
				</div>
			</form>
		</>
	);
};