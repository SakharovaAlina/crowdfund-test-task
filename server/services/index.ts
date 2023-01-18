import {asClass} from 'awilix';

import CertificateService from './CertificateService';
import TemplateService from './TemplateService';
import UserService from './UserService';

export default {
  CertificateService: asClass(CertificateService).singleton(),
  UserService: asClass(UserService).singleton(),
  TemplateService: asClass(TemplateService).singleton(),
};
