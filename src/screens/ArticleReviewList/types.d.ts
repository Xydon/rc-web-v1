namespace ArticleReviewList {
	interface ArticleFormat {
		userId: string;
		articleId: string;
		category:
			| {
					id: string;
					name: string;
			  }
			| undefined;
		heading: string;
		subheading: string;
		body: string;
		reviewStatus: ArticleReviewStatus;
		message: string;
	}

  type FilterType =  "all" | "pending" | "rejected";

	interface State {
		articles: ArticleFormat[];
		filter: FilterType;
    query: string;
		loading: Record<string, AsyncState>;
	}
}
