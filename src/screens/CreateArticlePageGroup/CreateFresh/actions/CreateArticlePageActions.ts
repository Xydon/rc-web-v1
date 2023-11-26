import StateUtils, {
	FieldStateUtils,
} from "@src/modules/StateManagement/Core/StateUtils";

export default class CreateArticlePageActions extends FieldStateUtils<CreateArticleScreen.State> {
	setHeading(d: string) {
		this.setField(
			d,
			(p) => p.heading,
			(p, f) => (p.heading = f)
		);
	}
	setByLine(d: string) {
		this.setField(
			d,
			(p) => p.byLine,
			(p, f) => (p.byLine = f)
		);
	}
	setBody(d: string) {
		this.setField(
			d,
			(p) => p.body,
			(p, f) => (p.body = f)
		);
	}
	setNote(d: string) {
		this.setField(
			d,
			(p) => p.note,
			(p, f) => (p.note = f)
		);
	}

	validateHeading() {
		return this.validateField(
			(p) => p.heading,
			(p, f) => {
				p.heading = f;
			}
		);
	}

	validateByLine() {
		return this.validateField(
			(p) => p.byLine,
			(p, f) => (p.byLine = f)
		);
	}

	validateBody() {
		return this.validateField(
			(p) => p.body,
			(p, f) => (p.body = f)
		);
	}

	validateNote() {
		return this.validateField(
			(p) => p.note,
			(p, f) => (p.note = f)
		);
	}

	validateAll() {
		const verdict = [
			this.validateNote(),
			this.validateHeading(),
			this.validateByLine(),
			this.validateBody(),
		].reduce((a, c) => a && c, true);

		console.log([
			this.validateNote(),
			this.validateHeading(),
			this.validateByLine(),
			this.validateBody(),
		]);

		return verdict;
	}

	discard() {
		this.mutateState((v) => {
			v.body.clearField();
			v.byLine.clearField();
			v.heading.clearField();
			v.note.clearField();
		});
	}
}
