import AxiosFactory from "@src/modules/axios/AxiosFactory";

export const MyArticlesInstance = AxiosFactory.createInstance({
	baseURL: "webv1/pages/myArticlesPage/",
});
