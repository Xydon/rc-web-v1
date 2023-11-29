import { ServerStateUtils } from "@src/modules/StateManagement/Core/StateUtils";
import createIntern, { createInternProps } from "../fetch/services/createIntern";

export default class SubmitFormActions extends ServerStateUtils<CreateInternList.State>{

  async submitInternForm(){
    let tempAttachments : {
      name: string,
      value: string
    } []=[]
    tempAttachments = this.state.attachments.map(v=>({
      name:v.name.getValue(),
      value:v.value.getValue()
    }))
    const d: createInternProps = {
      name: this.state.name.getValue(),
      institution: this.state.institution.getValue(),
      attributes: this.state.attributes.getValue(),
      description: this.state.description.getValue(),
      attachments: tempAttachments
    }
    await this.handleAsync("createIntern",()=>createIntern(d))
  }
}