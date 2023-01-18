import BaseContext from 'server/BaseContext';

export default class UserService extends BaseContext {
  public findUserByName(name: string) {
    const {UserModel} = this.di;
    return UserModel.findOne({name: name});
  }
}
