import { api } from "../api";
import { MyPostInstance } from "../instance";

export default async function fetchPosts(userId: string) {
	return await MyPostInstance.post<PostData[]>(api.getAllPosts, {
		userId,
	});
}
