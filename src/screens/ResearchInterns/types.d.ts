namespace ResearchInterns {
	interface ResearchInternData {
		id: string;
		name: string;
		description: string;
		attachments: {
			link: string;
			alt: string;
		}[];
		postedOn: Date;
		institution: string;
		attributes: string;
		isActive: boolean;
	}

	interface State {
		internList: ResearchInternData[];
		loading: Record<string, AsyncState>;
	}
}
