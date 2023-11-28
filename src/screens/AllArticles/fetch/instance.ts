import AxiosFactory from "@src/modules/axios/AxiosFactory";

export const AllArticlesInstance = AxiosFactory.createInstance({ 
  baseURL: 'webv1/pages/allArticlesPage/'
})