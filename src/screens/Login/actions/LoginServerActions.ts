import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import LoginService from "../server/services/LoginService";

export default class LoginServerContact extends ServerStateUtils<LoginScreen.State> {
	async login(setUserDetails: (d: UserDetails) => void) {
		const { email, password } = this.state;
		const res = await this.handleAsync("loggingIn", () =>
			LoginService({ email: email.getValue(), password: password.getValue() })
		);
		if (!res) return;

		setUserDetails(res.data.user);
	}
}
