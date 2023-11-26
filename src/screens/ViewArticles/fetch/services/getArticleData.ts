import { apiIndex } from "../api";
import { ViewArticleInstance } from "../instance";

interface ArticleBody {
	articleId: string;
	heading: string;
	subheading: string;
	body: string;
	author: {
		id: string;
		name: string;
	};
	comments: {
		commentId: string;
		commentDate: string;
		userId: string;
		name: string;
		likes: number;
		hasLiked: boolean;
		commentBody: string;
	}[];
}
export default async function getArticleData(
	userId: string,
	articleId: string
) {
	return ViewArticleInstance.get<ArticleBody>(
		apiIndex.getArticle(userId, articleId)
	);
}
