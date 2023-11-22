import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import LoginService from "../server/services/LoginService";

export default class LoginServerContact extends ServerStateUtils<LoginScreen.LoadingStates> {
	async login(email: string, password: string) {
		const res = await this.handleAsync("login", () =>
			LoginService({ email, password })
		);

		if (!res) return;

		localStorage.setItem("user", JSON.stringify(res.data.user));
	}
}
