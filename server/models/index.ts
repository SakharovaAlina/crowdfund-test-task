import { asFunction } from 'awilix';
import { IContextContainer } from 'server/BaseContext';

import Company, { CompanyType } from './Company';
import User, { UserType } from './User';
import Donation, { DonationType } from './Donation';

export interface IModelContainer {
  initModels: () => void;
  User: UserType;
  Company: CompanyType;
  Donation: DonationType;
}

const initModels = (ctx: IContextContainer) => {
  const { Company, User, Donation } = ctx;
  return () => {
    Company.initModel();
    User.initModel();
    Donation.initModel();
  };
};

export default {
  initModels: asFunction(initModels).singleton(),
  User: asFunction(User).singleton(),
  Company: asFunction(Company).singleton(),
  Donation: asFunction(Donation).singleton(),
};
