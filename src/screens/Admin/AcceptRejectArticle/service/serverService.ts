import { api } from "../api";
import { CreateAdminArticleInstance } from "../instance";

export default async function  getAdminArticlesList() {
  return await CreateAdminArticleInstance.get<CommunityArticle[]>(api.getArticleList)
}

export async function AdminAcceptReject(articleId:string,verdict:"accepted"|"rejected"){
  return await CreateAdminArticleInstance.put<{
    articleId:String,
    verdict:"accepted" | "rejected"
  }>(api.adminAcceptRejectArticle,{articleId,verdict})
}