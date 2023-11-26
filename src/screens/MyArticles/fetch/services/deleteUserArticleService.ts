import { apiIndex } from "../api";
import { MyArticlesInstance } from "../instance";

export default async function deleteUserArticleService(articleId: string) {
	await MyArticlesInstance.delete(apiIndex.deleteUserArticle(articleId));
}
