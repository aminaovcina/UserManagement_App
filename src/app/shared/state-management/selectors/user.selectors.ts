import { createSelector } from '@ngrx/store';
import { AppStoreModel } from '../store-models';

const loading = (state: AppStoreModel) => state.user.loading;
// get users
const users = (state: AppStoreModel) => state.user.users;
export const usersSelector = createSelector(
  users,
  loading,
  (users: any, loading: boolean) => {
    return {
      users,
      loading,
    };
  }
);

// get user permissions
const userPermissions = (state: AppStoreModel) => state.user.userPermissions;
export const userPermissionsSelector = createSelector(
  userPermissions,
  loading,
  (userPermissions: any, loading: boolean) => {
    return {
      userPermissions,
      loading,
    };
  }
);

// get user
const user = (state: AppStoreModel) => state.user.user;
export const userSelector = createSelector(
  user,
  loading,
  (user: any, loading: boolean) => {
    return {
      user,
      loading,
    };
  }
);
