import mysql2 from 'mysql2';
import * as awilix from 'awilix';
import {Sequelize} from 'sequelize';

import controllers from './controllers';
import services from './services';
import models from './models';
import {IContextContainer} from './BaseContext';

declare global {
  var di: any;
}

const initDb = (tx: IContextContainer) => {
  return new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      dialect: 'mysql',
      dialectModule: mysql2,
    }
  );
};

const getDI = (name: string | null) => {
  if (!global.di) {
    const container = awilix.createContainer({
      injectionMode: awilix.InjectionMode.PROXY,
    });
    container.register({
      ...models,
      ...services,
      ...controllers,
      db: awilix.asFunction(initDb).singleton(),
    });

    global.di = container;
  }
  return name ? global.di.resolve(name) : global.di;
};

export default getDI;
