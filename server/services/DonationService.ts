import { DonationState } from 'src/constants';
import BaseContext from '../BaseContext';

export default class DonationService extends BaseContext {
  public findDonations() {
    const { Donation, Company } = this.di;
    return Donation.findAll({
      include: [
        {
          model: Company,
          as: 'company',
          attributes: ['id', 'name'],
        },
      ],
      raw: true,
      nest: true,
    });
  }

  public createDonation(data: any) {
    const item = this.di.Donation.build({
      amount: data.amount,
      nickname: data.nickname,
      state: DonationState.VALID,
      companyId: data.companyId,
    });
    return item.save();
  }
}
