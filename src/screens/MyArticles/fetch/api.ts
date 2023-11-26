export const apiIndex = {
	getUserArticles: (userId: string) => `getUserArticle/${userId}`,
	deleteUserArticle: (articleId: string) => `deleteUserArticle/${articleId}`,
};
