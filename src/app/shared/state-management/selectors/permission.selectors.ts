import { createSelector } from '@ngrx/store';
import { AppStoreModel } from '../store-models';

const loading = (state: AppStoreModel) => state.permission.loading;

// get permissions
const permissions = (state: AppStoreModel) => state.permission.permissions;
export const permissionsSelector = createSelector(
  permissions,
  loading,
  (permissions: any, loading: boolean) => {
    return {
      permissions,
      loading,
    };
  }
);
