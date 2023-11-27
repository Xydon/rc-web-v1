import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";

export default class ServerActions extends ServerStateUtils<ResearchInterns.State> {
	//* fetch the interns from getInternList.ts
	async fetchInterns() {}

	//* set the query
	setQuery(qry: string) {
		this.mutateState((v) => {
			v.query = qry.trim();
		});
	}

	//* filter intern list as per the query
	getInternList() {
		return this.state.internList.filter((v) => {
			return [v.attributes, v.description, v.institution, v.isActive]
				.join(" ")
				.includes(this.state.query);
		});
	}
}
