import AxiosFactory from "@src/modules/axios/AxiosFactory";

export const getInternInstance = AxiosFactory.createInstance({ 
  baseURL: 'webv1/pages/InternListing/'
})