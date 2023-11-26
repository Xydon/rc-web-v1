namespace MyArticles {
	interface UserArticleData {
		articleId: string;
		articleHeading: string;
		articleSubHeading: string;
		articleAcceptedDate: string;
		articleStats: {
			views: number;
			likes: number;
			comments: number;
		};
	}

	interface State {
		articles: UserArticleData[];
		loading: Record<string, AsyncState>;
    query: string;
	}
}
