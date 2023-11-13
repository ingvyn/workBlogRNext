export const onLike = async (post: number): Promise<void> => {
	interface IPostData { userId: number, id: number, title: string, body: string }

	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`, {
		method: 'GET',
	});
	const postData: IPostData = await response.json();
	await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`, {
		method: 'PATCH',
		body: JSON.stringify(postData),
		headers: {
			'Content-type': 'application/json'
		}
	});
};
