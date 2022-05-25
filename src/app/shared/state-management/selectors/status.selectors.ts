import { createSelector } from '@ngrx/store';
import { AppStoreModel } from '../store-models';

const loading = (state: AppStoreModel) => state.status.loading;

// get statuses
const statuses = (state: AppStoreModel) => state.status.statuses;
export const statusesSelector = createSelector(
  statuses,
  loading,
  (statuses: any, loading: boolean) => {
    return {
      statuses,
      loading,
    };
  }
);
