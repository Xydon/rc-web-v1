import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import getArticleData from "../fetch/services/getArticleData";
import createCommentService, {
	AddCommentProps,
} from "../fetch/services/createComment";
import likeArticles from "../fetch/services/likeArticles";

export default class PageActions extends ServerStateUtils<ViewArticles.State> {
	async fetchArticle(userId: string, articleId: string) {
		const res = await this.handleAsync("fetchArticle", () =>
			getArticleData(userId, articleId)
		);

		if (res) {
			this.mutateState((v) => {
				v.article = res.data;
			});
		}
	}

	async createComment(comment: AddCommentProps) {
		const res = await this.handleAsync("createComment", () =>
			createCommentService(comment)
		);
		if (res) {
			this.mutateState((v) => {
				console.log(res.data);
				if (v.article) {
					v.article.comments.push(res.data);
				}
			});
		}
	}

	async likeArticle(userId: string, articleId: string) {
		await this.handleAsync(
			"likeArticle",
			() => likeArticles(userId, articleId),
			{
				onSuccess: () => {
					this.mutateState((v) => {
						if (v.article) {
							if (v.article.hasLiked) {
								v.article.likes--;
							} else {
								v.article.likes++;
							}

							v.article.hasLiked = !v.article.hasLiked;
						}
					});
				},
			}
		);
	}

	setQuery(query: string) {
		this.mutateState((v) => {
			v.comment.query = query;
		});
	}
}
