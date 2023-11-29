import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import { getInternInfo } from "@src/screens/ResearchInterns/fetch/service/getInternList";

export default class serverInternInfoActions extends ServerStateUtils<ResearchInternsInfo.State>{
  async getinternInfo(id:string){
    const data = await this.handleAsync("getInternInfo",()=>getInternInfo(id))

    console.log("data:",data)
    if(data){
      this.mutateState((v)=>{
        v.internList=data.data
      })
    }
  }
}