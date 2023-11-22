import StateUtils, {
	ServerStateUtils,
} from "@src/modules/StateManagement/Core/StateUtils";

export default class LoginActions extends StateUtils<LoginScreen.State> {
	setEmail(d: string) {
		this.mutateState((p) => {
			p.email.clearError();
			p.email.setValue(d);
		});
	}
	setPassword(d: string) {
		this.mutateState((p) => {
			p.password.clearError();
			p.password.setValue(d);
		});
	}
	validateEmail() {
		const email = this.state.email;
		email.validate();
		this.mutateState((p) => {
			p.email = email;
		});
		return email.isVaild();
	}
	validatePassword() {
		const passsword = this.state.password;
		passsword.validate();
		this.mutateState((p) => {
			p.password = passsword;
		});
		return passsword.isVaild();
	}
	validateAll() {
		return [this.validateEmail(), this.validatePassword()].reduce(
			(a, c) => a && c,
			true
		);
	}
}
