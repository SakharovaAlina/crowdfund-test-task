import {POST, GET} from 'server/decorators';
import BaseController from './BaseController';

export default class TemplateController extends BaseController {
  protected async getServerSideProps() {
    const {TemplateService} = this.di;
    return await TemplateService.findTemplates();
  }

  @GET('/api/template')
  public async getTemplate() {
    console.log('call GET action !!!');
    const {TemplateService} = this.di;
    return await TemplateService.findTemplates();
  }

  @POST('/api/template')
  public async createNewTemplate({body}) {
    const {TemplateService} = this.di;
    return await TemplateService.createTemplate(body['arg'])
      .then((Template: any) => {
        console.log(Template);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  @POST()
  public getSuperMethod() {}
}
