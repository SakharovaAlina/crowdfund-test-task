import {Model, DataTypes, BuildOptions} from 'sequelize';
import {IContextContainer} from 'server/BaseContext';

interface IUser extends Model {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserType = typeof Model & {
  new (values?: object, options?: BuildOptions): IUser;
  initModel(): void;
};

export default (ctx: IContextContainer) => {
  const User = <UserType>ctx.db.define(
    'users',
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
        validate: {
          len: {
            args: [6, 255],
            msg: 'Name must be between 6 and 255 characters in length',
          },
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

  User.initModel = () => {
    User.hasMany(ctx.Certificate, {
      sourceKey: 'id',
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };

  return User;
};
