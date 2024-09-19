import { UserModel } from "../core/models/user.model";
import { IAuthPort } from "../core/ports/iauth.port";

export class EVAAuthAdapter implements IAuthPort {
  login(user: UserModel) {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          console.log(user);
          resolve(true);
        } else {
          reject("Operation failed");
        }
      }, 1000);
    });
  }

  //#region Passwordless
  requestCode(userKey: string) {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          console.log(userKey);
          resolve(true);
        } else {
          reject("Operation failed");
        }
      }, 1000);
    });
  }

  verifyCode(userCode: string) {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          console.log(userCode);
          resolve(true);
        } else {
          reject("Operation failed");
        }
      }, 1000);
    });
  }
  //#endregion
}
