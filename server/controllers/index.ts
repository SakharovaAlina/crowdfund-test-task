import { asClass } from 'awilix';

import CompanyController from './CompanyController';
import DonationController from './DonationController';

export default {
  CompanyController: asClass(CompanyController).singleton(),
  DonationController: asClass(DonationController).singleton(),
};
