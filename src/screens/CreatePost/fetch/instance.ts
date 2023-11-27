import AxiosFactory from "@src/modules/axios/AxiosFactory";

export const CreatePostInstance = AxiosFactory.createInstance({
	baseURL: "webv1/pages/createPostPage/",
});
