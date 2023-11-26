import AxiosFactory from "@src/modules/axios/AxiosFactory";

export const ViewArticleInstance = AxiosFactory.createInstance({
	baseURL: "webv1/pages/viewArticle",
});
