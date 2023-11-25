import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import createUser, { SignupBody } from "../fetch/services/createUser";

export default class SignupActions extends ServerStateUtils<SignupScreen.State> {
	async signup(onSuccess: (d : UserDetails) => void) {
		const signupData: SignupBody = {
			userName: this.state.userName.getValue(),
			email: this.state.email.getValue(),
			password: this.state.password.getValue(),
		};

		const res = await this.handleAsync("createUser", () => createUser(signupData));

		if (!res) return;

		onSuccess(res.data.user);
	}
}
