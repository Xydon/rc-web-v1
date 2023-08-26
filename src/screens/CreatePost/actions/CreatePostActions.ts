import StateUtils, {
	FieldStateUtils,
} from "@src/modules/StateManagement/Core/StateUtils";

export default class CreatePostActions extends FieldStateUtils<CreatePostScreen.State> {
	setHeading(data: string) {
		this.setField(
			data,
			(p) => p.postHeading,
			(p, f) => {
				p.postHeading = f;
			}
		);
	}

	setBody(data: string) {
		this.setField(
			data,
			(p) => p.postBody,
			(p, f) => {
				p.postBody = f;
			}
		);
	}

	validateHeading() {
		return this.validateField(
			(p) => p.postHeading,
			(p, f) => (p.postHeading = f)
		);
	}

	validateBody() {
		return this.validateField(
			(p) => p.postBody,
			(p, f) => (p.postBody = f)
		);
	}

	validateForm() {
		return [this.validateBody(), this.validateHeading()].reduce(
			(a, c) => a && c,
			true
		);
	}

	resetForm() {
		this.mutateState((p) => {
			p.postHeading.clearField();
			p.postBody.clearField();
		});
	}
}
