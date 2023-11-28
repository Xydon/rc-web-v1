namespace AllArticles {
	interface State {
		articles: CommunityArticle[];
		loading: Record<string, AsyncState>;
	}
}
