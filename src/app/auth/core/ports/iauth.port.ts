import { UserModel } from "../models/user.model";

export interface IAuthPort {
  login: (user: UserModel) => Promise<boolean>;
  requestCode: (userKey: string) => Promise<boolean>;
  verifyCode: (userCode: string) => Promise<boolean>;
}