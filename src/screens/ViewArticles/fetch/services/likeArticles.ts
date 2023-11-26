import { apiIndex } from "../api";
import { ViewArticleInstance } from "../instance";

export default async function likeArticles(userId: string, articleId: string) {
	await ViewArticleInstance.post(apiIndex.likeArticles, { userId, articleId });
}
