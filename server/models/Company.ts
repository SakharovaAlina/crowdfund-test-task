import { Model, DataTypes, BuildOptions } from 'sequelize';
import { IContextContainer } from 'server/BaseContext';
import { CompanyStatus } from 'src/constants';

interface ICompany extends Model {
  id: number;
  name: string;
  description: string;
  goal: string;
  status: string;
  expirationDate: Date;
  ownerUserId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type CompanyType = typeof Model & {
  new (values?: object, options?: BuildOptions): ICompany;
  initModel(): void;
};

export default (ctx: IContextContainer) => {
  const Company = <CompanyType>ctx.db.define(
    'companies',
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
      ownerUserId: {
        type: DataTypes.INTEGER,
        onDelete: 'SET NULL',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      goal: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: CompanyStatus.ACTIVE,
      },
      expirationDate: {
        type: DataTypes.NUMBER,
        allowNull: true,
        defaultValue: null,
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

  Company.initModel = () => {
    Company.belongsTo(ctx.User, {
      foreignKey: 'ownerUserId',
      as: 'owner',
    });
    Company.hasMany(ctx.Donation, {
      sourceKey: 'id',
      foreignKey: 'companyId',
      as: 'donations',
    });
  };

  return Company;
};
