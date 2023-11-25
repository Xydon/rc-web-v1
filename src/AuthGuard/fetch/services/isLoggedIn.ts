import { apiIndex } from "../apis";
import LoginInstance from "../instance";

export default async function isLoggedInService() {
	return await LoginInstance.get<boolean>(
		apiIndex.isLoggedIn,
		{ withCredentials: true }
	);
}
