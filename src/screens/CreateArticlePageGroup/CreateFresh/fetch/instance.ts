import AxiosFactory from "@src/modules/axios/AxiosFactory";

const CreateArticleInstance = AxiosFactory.createInstance({
	baseURL: "webv1/pages/createArticlePage/",
});

export default CreateArticleInstance;
