import { api } from "../api";
import { MyPostInstance } from "../instance";

export interface PostCommentData {
	postId: string;
	userId: string;
	content: string;
}

export default async function postComment(postCommentData: PostCommentData) {
	await MyPostInstance.post(api.postComment, postCommentData);
}
