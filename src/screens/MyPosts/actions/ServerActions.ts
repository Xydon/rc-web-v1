import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import fetchPosts from "../fetch/services/fetchPosts";
import postComment, { PostCommentData } from "../fetch/services/postComment";
import { nanoid } from "nanoid";
import getTodayDate from "@src/modules/Utils/getTodayDate";
import likePost, { LikePostData } from "../fetch/services/likePost";
import { MyPostInstance } from "../fetch/instance";

export default class ServerActions extends ServerStateUtils<CommunityPosts.State> {
	async fetch(userId: string) {
		const res = await this.handleAsync("getPosts", () => fetchPosts(userId));
		if (res) {
			this.mutateState((v) => {
				v.posts = res.data;
			});
		}
	}

	async createComment(
		props: PostCommentData,
		userName: string,
		postIdx: number
	) {
		await this.handleAsync("createComment", () => postComment(props), {
			onSuccess: () => {
				this.mutateState((v) => {
					v.posts[postIdx].comments.push({
						userId: props.userId,
						id: nanoid(),
						commentText: props.content,
						creationDate: getTodayDate(),
						userName: userName,
					});
				});
			},
			onError: () => {
				alert("failed to create comment");
			},
		});
	}

	async likePost(props: LikePostData, postIdx: number) {
		await this.handleAsync("likePost", () => likePost(props), {
			onSuccess: () => {
				this.mutateState((v) => {
					if (v.posts[postIdx].hasLiked) {
						v.posts[postIdx].hasLiked = false;
						v.posts[postIdx].likes--;
					} else {
						v.posts[postIdx].hasLiked = true;
						v.posts[postIdx].likes++;
					}
				});
			},
			onError: () => {
				alert("failed to like comment");
			},
		});
	}

	async deletePost(id: string) {
		this.handleAsync(
			"deletePost",
			async () => {
				await MyPostInstance.delete("deletePost/" + id);
			},
			{
				onSuccess: () => {
					this.mutateState((v) => {
						v.posts = v.posts.filter((k) => k.id !== id);
					});
				},
			}
		);
	}
}
