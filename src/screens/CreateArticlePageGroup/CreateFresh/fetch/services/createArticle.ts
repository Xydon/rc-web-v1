import { apiIndex } from "../api";
import CreateArticleInstance from "../instance";

export interface createArticleProps {
	articleHeading: string;
	articleSubheading: string;
	articleBody: string;
	noteForReviewer: string;
	userId: string;
}

export default async function createArticleService(body: createArticleProps) {
	await CreateArticleInstance.post(apiIndex.createArticle, body);
}
