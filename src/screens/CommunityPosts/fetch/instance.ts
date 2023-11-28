import AxiosFactory from "@src/modules/axios/AxiosFactory";

export const CommunityPostInstance = AxiosFactory.createInstance({
	baseURL: "webv1/pages/allPostsPage/",
});
