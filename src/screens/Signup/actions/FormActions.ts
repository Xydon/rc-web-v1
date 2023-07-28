import FieldDataGroup from "@src/modules/FieldData/FieldDataGroup";
import StateUtils, {
	ServerStateUtils,
} from "@src/modules/StateManagement/Core/StateUtils";
import checkIsEmailUnique from "../fetch/services/checkIsEmailUnique";

export default class FormActions extends ServerStateUtils<SignupScreen.State> {
	setName(d: string) {
		this.mutateState((p) => {
			p.userName.setValue(d);
		});
	}

	setPassword(d: string) {
		this.mutateState((p) => {
			p.password.setValue(d);
		});
	}

	setEmail(d: string) {
		this.mutateState((p) => {
			p.email.setValue(d);
		});
	}

	validateName() {
		let verdict = true;
		this.mutateState((p) => {
			p.userName.validate();
			verdict = p.userName.hasError();
		});

		return verdict;
	}

	async validateEmail() {
		const email = this.state.email;
		email.validate();
		if (!email.hasError()) {
			const res = await this.handleAsync("checkEmail", () =>
				checkIsEmailUnique(email.getValue())
			);
			if (res === undefined) {
				email.setError("server error, cannot validate email");
			} else {
				if (res.data) {
					email.setError("email already exists!");
				}
			}
		}

		// setting
		this.mutateState((p) => {
			p.email = email;
		});

		return email.hasError();
	}

	validatePassword() {
		let verdict = true;
		this.mutateState((p) => {
			verdict = p.password.validate();
		});
		return verdict;
	}

	async validateAll() {
		const verdict = [
			await this.validateEmail(),
			this.validateName(),
			this.validatePassword(),
		].reduce((a, c) => a && c, true);

		return verdict;
	}
}
