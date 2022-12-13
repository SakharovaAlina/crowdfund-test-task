import { POST, GET, USE, run } from 'server/decorators';
import BaseController from './BaseController';
import Company from 'server/models/Company';

export default class CompanyController extends BaseController {
  protected async getServerSideProps() {
    const { CompanyService } = this.di;
    return await CompanyService.findCompanies();
  }

  @GET('/api/company')
  public async getCompany() {
    console.log('call GET action !!!');
    const { CompanyService } = this.di;
    return await CompanyService.findCompanies();
  }

  @POST('/api/markCampaignAsFraud')
  public async markCampaignAsFraud({ body }) {
    console.log('body', body['arg'])
    const { companyId } = body['arg'];
    const { CompanyService } = this.di;
    return await CompanyService.markCampaignAsFraud(companyId);
  }

}
