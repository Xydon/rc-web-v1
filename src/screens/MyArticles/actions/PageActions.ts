import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import getUserArticlesService from "../fetch/services/getUserArticlesService";
import deleteArticleService from "@src/screens/ArticleReviewList/fetch/services/deleteArticle";

export default class PageActions extends ServerStateUtils<MyArticles.State> {
	async deleteArticle(articleId: string) {
		await this.handleAsync("deleteArticle", () =>
			deleteArticleService(articleId)
		);
	}

	async fetchArticles(userId: string) {
		const res = await this.handleAsync("fetchArticles", () =>
			getUserArticlesService(userId)
		);
		if (res) {
			this.mutateState((v) => {
				v.articles = res.data;
			});
		}
	}

	setQuery(query: string) {
		this.mutateState((v) => {
			v.query = query.trim();
		});
	}
	getArticles() {
		if (this.state.query.length === 0) {
			return this.state.articles;
		}

		return this.state.articles.filter((v) => {
			const str = [
				v.articleHeading.toLowerCase(),
				v.articleSubHeading.toLowerCase(),
			].join(" ");

			return str.includes(this.state.query.toLowerCase());
		});
	}
}
