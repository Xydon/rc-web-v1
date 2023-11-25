import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import getArticles from "../fetch/services/getArticles";

export default class PageActions extends ServerStateUtils<ArticleReviewList.State> {
	async fetchArticles(userId: string) {
		const res = await this.handleAsync("fetchArticles", () =>
			getArticles(userId)
		);
		if (res) {
			this.mutateState((v) => {
				v.articles = res.data;
			});
		}
	}

	private match(a: string, b: string) {
		return a.includes(b);
	}

	setFilter(filter: ArticleReviewList.FilterType) {
		this.mutateState((v) => {
			v.filter = filter;
		});
	}

	setQuery(query: string) {
		this.mutateState((v) => {
			v.query = query;
		});
	}
	filterArticles() {}

	articleList() {
		return this.state.articles.filter((v) => {
			const v1 = this.state.query.trim().length
				? this.match(
						[v.body, v.heading, v.subheading].join(" "),
						this.state.query.trim()
				  )
				: true;

			let v2 =
				this.state.filter === "all"
					? true
					: (() => {
							if (
								this.state.filter === "pending" &&
								v.reviewStatus === "submitted"
							)
								return true;
							if (
								this.state.filter === "rejected" &&
								v.reviewStatus === "rejected"
							)
								return true;
							return false;
					  })();

			return v1 && v2;
		});
	}
}
