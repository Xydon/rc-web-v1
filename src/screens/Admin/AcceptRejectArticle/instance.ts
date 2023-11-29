import AxiosFactory from "@src/modules/axios/AxiosFactory";

export const CreateAdminArticleInstance = AxiosFactory.createInstance({ 
  baseURL: 'webv1/pages/AdminAcceptArticlePage/'
})