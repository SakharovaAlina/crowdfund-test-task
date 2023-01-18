import {Model, DataTypes, BuildOptions} from 'sequelize';
import {IContextContainer} from 'server/BaseContext';

interface ITemplate extends Model {
  id: number;
  name: string;
  fileName: string;
  createdAt: Date;
  updatedAt: Date;
}

export type TemplateType = typeof Model & {
  new (values?: object, options?: BuildOptions): ITemplate;
  initModel(): void;
};

export default (ctx: IContextContainer) => {
  const Template = <TemplateType>ctx.db.define(
    'templates',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      fileName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  Template.initModel = () => {
    Template.hasMany(ctx.Certificate, {
      sourceKey: 'id',
      foreignKey: 'templateId',
      as: 'template',
      onDelete: 'CASCADE',
    });
  };

  return Template;
};
