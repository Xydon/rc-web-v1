export const apiIndex = {
	getArticle: (userId: string, articleId: string) =>
		`getArticle?userId=${userId}&articleId=${articleId}`,
	createComment: "createComment",
	likeArticles: "likeArticles",
};
