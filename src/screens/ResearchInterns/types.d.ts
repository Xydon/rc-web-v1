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
    query: string; 
		internList: ResearchInternData[];
		loading: Record<string, AsyncState>;
	}
}
