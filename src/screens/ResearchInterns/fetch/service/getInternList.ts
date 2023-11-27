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

export default async function getInternListService() {}
