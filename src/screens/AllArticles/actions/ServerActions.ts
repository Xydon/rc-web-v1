import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import getPopularArticles from "../fetch/services/getPopularArticles";

export default class ServerActions extends ServerStateUtils<AllArticles.State> {
	async fetch() {
		const res = await this.handleAsync("fetchArticles", () =>
			getPopularArticles()
		);
		if (res) {
			this.mutateState((v) => {
				v.articles = res.data;
			});
		}
	}
}
