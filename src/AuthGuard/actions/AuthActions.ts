import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import isLoggedInService from "../fetch/services/isLoggedIn";

export default class AuthActions extends ServerStateUtils<AuthGuard.State> {
	async isLoggedIn() {
		const res = await this.handleAsync("isLoggedIn", () => isLoggedInService());

		if (res === undefined) {
			this.mutateState((v) => {
				v.isLoggedIn = false;
				v.userDetails = null;
			});
		} else {
			this.mutateState((v) => {
				v.isLoggedIn = true;
				v.userDetails = res.data.user;
			});
		}
	}

	async logout() {}

	setUserDetails(details: UserDetails) {
		this.mutateState((v) => {
			v.userDetails = details;
			v.isLoggedIn = true;
		});
	}
}
