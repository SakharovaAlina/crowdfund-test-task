import {asClass} from 'awilix';

import CertificateController from './CertificateController';
import TemplateController from './TemplateController';

export default {
  CertificateController: asClass(CertificateController).singleton(),
  TemplateController: asClass(TemplateController).singleton(),
};
