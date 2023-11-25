import { apiIndex } from "../api";
import ArticleReviewListInstance from "../instance";

export interface ArticleFormat {
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

export default async function getArticles(userId: string) {
	return await ArticleReviewListInstance.get<ArticleFormat[]>(
		apiIndex.getArticles(userId)
	);
}
