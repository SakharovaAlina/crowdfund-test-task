import { CronJob } from 'cron';
import BaseContext, { IContextContainer } from './BaseContext';

export default class FraudCron extends BaseContext {
  private cron: CronJob;

  constructor(ctx: IContextContainer) {
    super(ctx);
    this.expiredCamaigns = this.expiredCamaigns.bind(this);
  }

  public init() {
    console.log('init!!');
    this.cron = new CronJob(
      '*/10 * * * * *',
      this.expiredCamaigns,
      null,
      true,
      'America/Los_Angeles'
    );
  }

  private expiredCamaigns() {
    const { CompanyService } = this.di;
    CompanyService.moveToExpired();
  }
}
