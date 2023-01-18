import BaseContext from '../BaseContext';

export default class TemplateService extends BaseContext {
  public findTemplates() {
    const {Template} = this.di;
    return Template.findAll({
      raw: true,
      nest: true,
    });
  }

  public createTemplate(data: any) {
    const item = this.di.Template.build({
      name: data.name,
      fileName: data.fileName,
    });
    return item.save();
  }
}
