import { POST, GET, USE } from 'server/decorators';
import BaseController from './BaseController';

export default class DonationController extends BaseController {
  protected async getServerSideProps() {
    const { DonationService } = this.di;
    return await DonationService.findCompanies();
  }

  @GET('/api/donation')
  public async getDonation() {
    console.log('call GET action !!!');
    const { DonationService } = this.di;
    return await DonationService.findDonations();
  }

  @POST('/api/donation')
  public async createNewDonation({ body }) {
    const { DonationService } = this.di;
    return await DonationService.createDonation(body['arg'])
      .then((donation: any) => {
        console.log(donation);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  @POST()
  public getSuperMethod() {}
}
