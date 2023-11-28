import { api } from "../api";
import { AllArticlesInstance } from "../instance";


export default async function getPopularArticles() {
	return await AllArticlesInstance.get<CommunityArticle[]>(api.getAllArticles);
}
