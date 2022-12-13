import { asClass } from 'awilix';

import CompanyService from './CompanyService';
import DonationService from './DonationService';
import UserService from './UserService';

export default {
  CompanyService: asClass(CompanyService).singleton(),
  UserService: asClass(UserService).singleton(),
  DonationService: asClass(DonationService).singleton(),
};
