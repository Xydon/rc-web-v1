import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import createPostService, {
	PostBody,
} from "../fetch/services/createPostService";

export default class ServerActions extends ServerStateUtils<CreatePostScreen.State> {
	async createPost(userId: string, onSuccess: () => void) {
		const d: PostBody = {
			userId,
			heading: this.state.postHeading.getValue(),
			body: this.state.postBody.getValue(),
			images: this.state.images,
		};

		await this.handleAsync("createPost", () => createPostService(d), {
			onSuccess,
			onError: () => {
				alert("failed to create post");
			},
		});
	}
}
