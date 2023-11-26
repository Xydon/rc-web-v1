import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import getArticleData from "../fetch/services/getArticleData";

export default class PageActions extends ServerStateUtils<ViewArticles.State> {
	async fetchArticle(userId: string, articleId: string) {
		const res = await this.handleAsync("fetchArticle", () =>
			getArticleData(userId, articleId)
		);

    if(res) {
      this.mutateState(v => {
        v.article = res.data;
      })
    }
	}
}
