import apiIndex from "../api";
import SignupInstance from "../instance";

export default async function checkIsEmailUnique(email: string) {
	return SignupInstance.get<boolean>(apiIndex.checkIsEmailUnique(email));
}
