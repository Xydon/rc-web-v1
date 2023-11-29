import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import getInternListService from "../service/getInternList";

export default class ServerStateActions extends ServerStateUtils<ResearchInterns.State>{

  async getAllInternListing(){
    const data = await this.handleAsync("getInternListing",()=>getInternListService())
    if(data){
      this.mutateState((v)=>{
        v.internList= data.data
      })
    }
    
  }
}