import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import getAdminArticlesList from "../service/serverService";

export default class ServerActions extends ServerStateUtils<AdminArticlesList.State> {
  async getArticleList (){
    const data = await this.handleAsync("getAdminArtilesList",() =>getAdminArticlesList())
    this.mutateState((V)=>{
      if(data){
        V.articles=data.data
      }
      
    })
  }
}