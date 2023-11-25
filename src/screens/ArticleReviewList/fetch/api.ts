export const apiIndex = {
	getArticles: (userid: string) => `getArticles?userId=${userid}&type=ALL`,
	deleteArticle: (articleId: string) => `deleteArticle/${articleId}`,
};
