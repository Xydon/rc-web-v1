import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import getArticleData from "../fetch/services/getArticleData";
import createCommentService, {
	AddCommentProps,
} from "../fetch/services/createComment";

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

	setQuery(query: string) {
		this.mutateState((v) => {
			v.comment.query = query;
		});
	}
}
