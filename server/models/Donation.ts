import { Model, DataTypes, BuildOptions } from 'sequelize';
import { IContextContainer } from 'server/BaseContext';

interface IDonation extends Model {
  id: number;
  amount: string;
  nickname: string;
  state: string;
  companyId: number;
  createdAt: number;
  updatedAt: number;
}

export type DonationType = typeof Model & {
  new (values?: object, options?: BuildOptions): IDonation;
  initModel(): void;
};

export default (ctx: IContextContainer) => {
  const Donation = <DonationType>ctx.db.define(
    'donations',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      amount: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      companyId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'companies',
          key: 'id',
        },
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

  Donation.initModel = () => {
    Donation.belongsTo(ctx.Company, {
      foreignKey: 'companyId',
      as: 'companyDonate',
    });
  };

  return Donation;
};
