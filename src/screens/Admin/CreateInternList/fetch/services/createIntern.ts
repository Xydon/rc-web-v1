import { CreateInternInstance } from "../instance";
import {api} from "../api"
export interface createInternProps {
	name: string;
	institution: string;
	attributes: string;
	description: string;
	attachments: { name: string; value: string }[];
}



export default async function createIntern(data:createInternProps){
  return await CreateInternInstance.post<createInternProps>(api.createIntern,data)
}