import { PermissionStoreModel } from './permission.storemodel';
import { StatusStoreModel } from './status.storemodel';
import { UserStoreModel } from './user.storemodel';

export class AppStoreModel {
  user: UserStoreModel;
  permission: PermissionStoreModel;
  status: StatusStoreModel;
}
