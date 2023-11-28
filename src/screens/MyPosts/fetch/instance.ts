import AxiosFactory from "@src/modules/axios/AxiosFactory";

export const MyPostInstance = AxiosFactory.createInstance({
	baseURL: "webv1/pages/myPostsPage/",
});
