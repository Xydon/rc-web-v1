import { api } from "../api";
import { CommunityPostInstance } from "../instance";

export interface LikePostData {
	userId: string;
	postId: string;
}

export default async function likePost(likePostData: LikePostData) {
  await CommunityPostInstance.post(api.likePost, likePostData);
}
