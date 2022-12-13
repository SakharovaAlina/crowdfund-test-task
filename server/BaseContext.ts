import { Exclude } from 'class-transformer';

export interface IContextContainer {
  [key: string]: any;
}

export default class BaseContext {
  private static stopInit: boolean = false;

  @Exclude()
  protected di: IContextContainer;

  constructor(opts: IContextContainer) {
    this.di = opts;
    if (!BaseContext.stopInit) {
      opts.initModels();
      BaseContext.stopInit = true;
  }    
  }
}
