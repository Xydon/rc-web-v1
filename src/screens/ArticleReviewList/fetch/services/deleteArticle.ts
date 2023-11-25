import { apiIndex } from "../api";
import ArticleReviewListInstance from "../instance";

export default function deleteArticleService(articleId: string) {
	return ArticleReviewListInstance.delete(apiIndex.deleteArticle(articleId));
}
