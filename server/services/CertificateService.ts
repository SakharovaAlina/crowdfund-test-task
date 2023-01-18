import BaseContext from '../BaseContext';

export default class CertificateService extends BaseContext {
  public findCertificates() {
    const {Certificate, User, Template} = this.di;
    return Certificate.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
        },
        {
          model: Template,
          as: 'template',
          attributes: ['id', 'name'],
        },
      ],
      raw: true,
      nest: true,
    });
  }

  public findAllCertificates() {
    const {Certificate} = this.di;
    return Certificate.findAll({
      raw: true,
      nest: true,
    });
  }

  public createCertificate(data: any) {
    const item = this.di.Certificate.build({
      templateId: data.templateId,
      fileName: data.fileName,
      courseName: data.courseName,
      name: data.name,
      description: data.description,
      date: data.date,
      userId: data.userId,
    });
    return item.save();
  }

  // public async markCampaignAsFraud(CertificateId: number) {
  //   const {Certificate, Donation} = this.di;
  //   const Certificate = await Certificate.findOne({
  //     where: {id: CertificateId},
  //     include: [
  //       {
  //         model: Donation,
  //         as: 'donations',
  //       },
  //     ],
  //   });
  //   Certificate.status = CertificateStatus.FRAUD;
  //   for (let i = 0; i < Certificate.donations.length; i++) {
  //     const d = Certificate.donations[i];
  //     d.state = DonationState.INVALID;
  //     await d.save();
  //   }
  //   await Certificate.save();
  // }

  // public async moveToExpired() {
  //   const {Certificate} = this.di;
  //   const date = moment().unix();
  //   const items = await Certificate.findAll({
  //     where: {
  //       expirationDate: {[Op.lt]: date},
  //     },
  //   });
  //   for (let i = 0; i < items.length; i++) {
  //     items[i].status = CertificateStatus.EXPIRED;
  //     items[i].save();
  //   }
  // }
}
