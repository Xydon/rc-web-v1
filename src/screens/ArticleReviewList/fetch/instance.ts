import AxiosFactory from "@src/modules/axios/AxiosFactory";

const ArticleReviewListInstance = AxiosFactory.createInstance({
	baseURL: "webv1/pages/articleVerificationPage/",
});

export default ArticleReviewListInstance;
