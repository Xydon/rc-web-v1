namespace AdminArticlesList {
	interface State {
		articles: CommunityArticle[];
		loading: Record<string, AsyncState>;
	}
}
