import { apiIndex } from "../api";
import { ViewArticleInstance } from "../instance";

export interface AddCommentProps {
	articleId: string;
	userId: string;
	text: string;
}

export interface Commentformat {
	commentId: string;
	commentDate: string;
	userId: string;
	name: string;
	likes: number;
	hasLiked: boolean;
	commentBody: string
}


export default async function createCommentService(comment: AddCommentProps) {
	return await ViewArticleInstance.post<Commentformat>(apiIndex.createComment, comment);
}
