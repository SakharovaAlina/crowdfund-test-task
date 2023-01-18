import {asFunction} from 'awilix';
import {IContextContainer} from 'server/BaseContext';

import Template, {TemplateType} from './Template';
import User, {UserType} from './User';
import Certificate, {CertificateType} from './Certificate';

export interface IModelContainer {
  initModels: () => void;
  User: UserType;
  Template: TemplateType;
  Certificate: CertificateType;
}

const initModels = (ctx: IContextContainer) => {
  const {Template, User, Certificate} = ctx;
  return () => {
    Template.initModel();
    User.initModel();
    Certificate.initModel();
  };
};

export default {
  initModels: asFunction(initModels).singleton(),
  User: asFunction(User).singleton(),
  Template: asFunction(Template).singleton(),
  Certificate: asFunction(Certificate).singleton(),
};
