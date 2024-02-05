import { PostCommentsProps } from './PostComments.props';
import styles from './PostComments.module.css';
import { Htag } from '..';
import { CommentItem } from '@/interfaces/comment.interface';
import cn from 'classnames';

const getComments = async (post: number): Promise<CommentItem[]> => {
	const data = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post}`);
	return data.json();
};

export const PostComments = async ({ post, className, ...props }: PostCommentsProps): Promise<JSX.Element> => {
	const comments = await getComments(post);
	return (
		<div className={cn(styles.comments,
			className)}
			{...props}>
			<Htag tag='h2' tabIndex={0}>
				Комментарии
			</Htag>
			{comments && comments.map(({ id, name, email, body }) => {
				return <div key={id}>
					<div id={`authorSection${id}`}
						className={styles.inline}
						aria-label='Данные об авторе комментария'
					>
						<span id={`authorName${id}`}
							className={styles.name}
							tabIndex={0}
							aria-labelledby={`authorSection${id} authorName${id}`}
						>
							{name}
						</span>
						<span>·</span>
						<span
							className={styles.email}
							tabIndex={0}
						>
							{email}
						</span>
					</div>
					<div className={styles.comment} tabIndex={0}>
						{body}
					</div>
				</div>;
			})
			}
		</div>
	);
};