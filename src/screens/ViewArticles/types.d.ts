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
			likes: number;
			hasLiked: boolean;
			createdOn: string;
			comments: {
				commentId: string;
				commentDate: string;
				userId: string;
				name: string;
				likes: number;
				hasLiked: boolean;
				commentBody: string;
			}[];
		} | null;
		comment: {
			query: string;
		};
		loading: Record<string, AsyncState>;
	}
}
