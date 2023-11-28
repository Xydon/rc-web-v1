import { api } from "../api";
import { CommunityPostInstance } from "../instance";

export default async function fetchPosts(userId: string) {
	return await CommunityPostInstance.post<PostData[]>(api.getAllPosts, {
		userId,
	});
}
