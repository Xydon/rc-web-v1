import apiIndex from "../apiIndex";
import LoginInstance from "../instance";

export interface LoginDesc {
	email: string;
	password: string;
}

export default async function LoginService(params: LoginDesc) {
	return LoginInstance.post<{user : UserDetails, token : string}>(apiIndex.login, params, { withCredentials: true });
}
