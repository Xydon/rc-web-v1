namespace ViewArticles {
	interface State {
		article: {
			articleId: string;
			heading: string;
			subheading: string;
			body: string;
			author: {
				id: string;
				name: string;
			};
			comments: {
				commentId: string;
				commentDate: string;
				userId: string;
				name: string;
				likes: number;
				hasLiked: boolean;
			}[];
		} | null;
		loading: Record<string, AsyncState>;
	}
}
