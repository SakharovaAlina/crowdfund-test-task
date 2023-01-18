import {POST, GET} from 'server/decorators';
import BaseController from './BaseController';

export default class CertificateController extends BaseController {
  protected async getServerSideProps() {
    const {CertificateService} = this.di;
    return await CertificateService.findCertificates();
  }

  @GET('/api/certificate')
  public async getCertificate() {
    console.log('call GET action !!!');
    const {CertificateService} = this.di;
    return await CertificateService.findCertificates();
  }

  @POST('/api/certificate')
  public async createNewCertificate({body}) {
    const {CertificateService} = this.di;
    return await CertificateService.createCertificate(body['arg'])
      .then((Template: any) => {
        console.log(Template);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
