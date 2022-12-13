import normalizeEmail from 'validator/lib/normalizeEmail';

import BaseContext from 'server/BaseContext';

export default class UserService extends BaseContext {
 
  public findUserByEmail(email: string) {
    const { UserModel } = this.di;
    return UserModel.findOne({ userEmail: normalizeEmail(email) });
  }
  
}
