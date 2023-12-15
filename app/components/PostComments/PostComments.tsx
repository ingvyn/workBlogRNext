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
			<Htag tag='h2'>
				Комментарии
			</Htag>
			{comments && comments.map(({ id, name, email, body }) => {
				return <div key={id}>
					<div className={styles.inline}>
						<span className={styles.name}>{name}</span>
						<span>·</span>
						<span className={styles.email}>{email}</span>
					</div>
					<div className={styles.comment}>
						{body}
					</div>
				</div>;
			})
			}
		</div>
	);
};