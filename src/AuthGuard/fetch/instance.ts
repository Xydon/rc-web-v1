import AxiosFactory from "@src/modules/axios/AxiosFactory";

const LoginInstance = AxiosFactory.createInstance({
	baseURL: "auth/login/",
});

export default LoginInstance;
