import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

export default class AxiosFactory {
	static createInstance<T = any>(config?: CreateAxiosDefaults<T>) {
		const basePath = "http://ec2-13-53-132-182.eu-north-1.compute.amazonaws.com/";
		// const basePath = "https://www.lohawalla.com/";
		const _config = config ? config : ({} as CreateAxiosDefaults<any>);
		const burl = _config.baseURL ? _config.baseURL : "";
		_config.baseURL = basePath + burl;
		return axios.create(_config);
	}
}
