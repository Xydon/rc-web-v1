import { api } from "../api";
import { CommunityPostInstance } from "../instance";

export interface PostCommentData {
	postId: string;
	userId: string;
	content: string;
}

export default async function postComment(postCommentData: PostCommentData) {
	await CommunityPostInstance.post(api.postComment, postCommentData);
}
