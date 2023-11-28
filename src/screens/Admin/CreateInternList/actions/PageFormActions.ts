import { FieldStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import FormActions from "@src/screens/Signup/actions/FormActions";
import CreateInternList from "../CreateInternList";
import FieldDataClass from "@src/modules/FieldData/FieldDataClass";
import { nanoid } from "nanoid";

export default class PageFormActions extends FieldStateUtils<CreateInternList.State> {
	addAttachment() {
		return this.mutateState((v) => {
			v.attachments.push({
				id: nanoid(),
				name: new FieldDataClass(""),
				value: new FieldDataClass(""),
			});
		});
	}

	deleteAttachment(id: string) {
		return this.mutateState((v) => {
			v.attachments = v.attachments.filter((v) => v.id !== id);
		});
	}

	/**
	 * name
	 * institution
	 * attributes
	 * description
	 */

	setName(name: string) {
		this.mutateState((v) => {
			v.name.setValue(name);
		});
	}
	setInstitution(institution: string) {
		this.mutateState((v) => {
			v.institution.setValue(institution);
		});
	}
	setAttributes(attributes: string) {
		this.mutateState((v) => {
			v.attributes.setValue(attributes);
		});
	}
	setDescription(description: string) {
		this.mutateState((v) => v.description.setValue(description));
	}
	setNameOfAttachment(id: string, name: string) {
		this.mutateState((v) => {
			for (let i = 0; i < v.attachments.length; ++i) {
				if (v.attachments[i].id === id) {
					v.attachments[i].name.setValue(name);
					break;
				}
			}
		});
	}
	setValueOfAttachment(id: string, value: string) {
		this.mutateState((v) => {
			for (let i = 0; i < v.attachments.length; ++i) {
				if (v.attachments[i].id === id) {
					v.attachments[i].value.setValue(value);
				}
			}
		});
	}

	validateName() {
		return this.validateField(
			(v) => v.name,
			(v, f) => (v.name = f)
		);
	}
	validateAttributes() {
		return this.validateField(
			(v) => v.attributes,
			(v, f) => (v.attributes = f)
		);
	}
	validateDescription() {
		return this.validateField(
			(v) => v.description,
			(v, f) => (v.description = f)
		);
	}
	validateAttachments() {
		let verdict = true;

		for (let i = 0; i < this.state.attachments.length; ++i) {
			verdict = verdict && this.state.attachments[i].name.validate();
			verdict = verdict && this.state.attachments[i].value.validate();
		}

		this.mutateState((v) => {
			v.attachments = this.state.attachments;
		});

		return verdict;
	}

	validateInstitution() {
		return this.validateField(
			(v) => v.institution,
			(v, f) => (v.institution = f)
		);
	}

	validateAll() {
		return [
			this.validateName(),
			this.validateAttachments(),
			this.validateDescription(),
			this.validateAttributes(),
			this.validateInstitution(),
		].reduce((a, c) => a && c, true);
	}
}
