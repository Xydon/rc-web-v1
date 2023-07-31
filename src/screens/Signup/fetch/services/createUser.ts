import apiIndex from "../api";
import SignupInstance from "../instance";

export interface SignupBody {
	userName: string;
	email: string;
	password: string;
}

export default async function createUser(data: SignupBody) {
	return SignupInstance.post(apiIndex.createUser, data);
}
