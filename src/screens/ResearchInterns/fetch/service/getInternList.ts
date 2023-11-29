import { CreateInternInstance } from "@src/screens/Admin/CreateInternList/fetch/instance";
import {api} from "../api"
import { getInternInstance } from "../instance";
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

export default async function getInternListService() {
	return await getInternInstance<ResearchInternData[]>(api.getInternListing)
}

export async function getInternInfo(id:string){
	return await getInternInstance<ResearchInternData>(api.getInternInfo(id))
}
