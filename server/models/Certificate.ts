import {Model, DataTypes, BuildOptions} from 'sequelize';
import {IContextContainer} from 'server/BaseContext';

interface ICertificate extends Model {
  id: number;
  templateId: number;
  fileName: string;
  courseName: string;
  name: string;
  description: string;
  date: number;
  userId: number;
  createdAt: number;
  updatedAt: number;
}

export type CertificateType = typeof Model & {
  new (values?: object, options?: BuildOptions): ICertificate;
  initModel(): void;
};

export default (ctx: IContextContainer) => {
  const Certificate = <CertificateType>ctx.db.define(
    'certificates',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      templateId: {
        type: DataTypes.INTEGER,
        onDelete: 'SET NULL',
        references: {
          model: 'templates',
          key: 'id',
        },
      },
      fileName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      courseName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      date: {
        type: DataTypes.NUMBER,
        allowNull: true,
        defaultValue: null,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
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

  Certificate.initModel = () => {
    Certificate.belongsTo(ctx.Template, {
      foreignKey: 'templateId',
      as: 'template',
    });
    Certificate.belongsTo(ctx.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return Certificate;
};
