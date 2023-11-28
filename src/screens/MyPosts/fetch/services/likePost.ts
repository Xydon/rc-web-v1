import { api } from "../api";
import { MyPostInstance } from "../instance";

export interface LikePostData {
	userId: string;
	postId: string;
}

export default async function likePost(likePostData: LikePostData) {
  await MyPostInstance.post(api.likePost, likePostData);
}
