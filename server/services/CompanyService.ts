import moment from 'moment-timezone';
import { Op } from 'sequelize';
import { CompanyStatus, DonationState } from 'src/constants';
import BaseContext from '../BaseContext';

export default class CompanyService extends BaseContext {
  public findCompanies() {
    const { Company, User } = this.di;
    return Company.findAll({
      include: [
        {
          model: User,
          as: 'owner',
          attributes: ['id', 'name'],
        },
      ],
      raw: true,
      nest: true,
    });
  }
  public findAllCompanies() {
    const { Company } = this.di;
    return Company.findAll({
      raw: true,
      nest: true,
    });
  }

  public async markCampaignAsFraud(companyId: number) {
    const { Company, Donation } = this.di;
    const company = await Company.findOne({
      where: { id: companyId },
      include: [
        {
          model: Donation,
          as: 'donations',
        },
      ],
    });
    company.status = CompanyStatus.FRAUD;
    for (let i = 0; i < company.donations.length; i++) {
      const d = company.donations[i];
      d.state = DonationState.INVALID;
      await d.save();
    }
    await company.save();
  }

  public async moveToExpired() {
    const { Company } = this.di;
    const date = moment().unix();
    const items = await Company.findAll({
      where: {
        expirationDate: { [Op.lt]: date },
      },
    });
    for (let i = 0; i < items.length; i++) {
      items[i].status = CompanyStatus.EXPIRED;
      items[i].save();
    }
  }
}
