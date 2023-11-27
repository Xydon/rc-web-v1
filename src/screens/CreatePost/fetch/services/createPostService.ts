import { apiIndex } from "../api";
import { CreatePostInstance } from "../instance";

export interface PostBody {
	userId: string;
	heading: string;
	body: string;
	images?: File[];
}

export default async function createPostService(body: PostBody) {
	await CreatePostInstance.post(apiIndex.createPost, body);
}
