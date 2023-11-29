import AxiosFactory from "@src/modules/axios/AxiosFactory";

export const CreateInternInstance = AxiosFactory.createInstance({ 
  baseURL: 'webv1/pages/createInternPage/'
})