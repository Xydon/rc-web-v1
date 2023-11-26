import { apiIndex } from "../api";
import { MyArticlesInstance } from "../instance";

interface UserArticleData {
	articleId: string;
	articleHeading: string;
	articleSubHeading: string;
	articleAcceptedDate: string;
	articleStats: {
		views: number;
		likes: number;
		comments: number;
	};
}

export default async function getUserArticlesService(userId: string) {
	return MyArticlesInstance.get<UserArticleData[]>(
		apiIndex.getUserArticles(userId)
	);
}
