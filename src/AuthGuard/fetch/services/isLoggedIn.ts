import { apiIndex } from "../apis";
import LoginInstance from "../instance";

export default async function isLoggedInService() {
	return await LoginInstance.get<{ user: UserDetails; token: string }>(
		apiIndex.isLoggedIn,
		{ withCredentials: true }
	);
}
