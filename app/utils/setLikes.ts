export const setLikes = (post: number): () => Promise<void> => {
	let postData: { userId: number, id: number, title: string, body: string };

	const getPost = async (post: number) => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`, {
			method: 'GET',
		});
		postData = await response.json();
	};

	const patchData = async (post: number) => {
		await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`, {
			method: 'PATCH',
			body: JSON.stringify(postData),
			headers: {
				'Content-type': 'application/json'
			}
		});
	};
	patchData(post);
	return async () => {
		getPost(post);
	};
};