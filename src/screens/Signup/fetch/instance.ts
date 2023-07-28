import AxiosFactory from "@src/modules/axios/AxiosFactory";

const SignupInstance = AxiosFactory.createInstance({
	baseURL: `auth/signup/`,
});

export default SignupInstance;
