import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import createArticleService, {
	createArticleProps,
} from "../fetch/services/createArticle";

export default class ServerActions extends ServerStateUtils<CreateArticleScreen.State> {
	async createArticle(userId: string) {
		const b: createArticleProps = {
			articleHeading: this.state.heading.getValue(),
			articleSubheading: this.state.byLine.getValue(),
			articleBody: this.state.body.getValue(),
			noteForReviewer: this.state.note.getValue(),
			userId,
		};

		const res = await this.handleAsync("createArticle", () => {
			return createArticleService(b);
		});
	}
}
