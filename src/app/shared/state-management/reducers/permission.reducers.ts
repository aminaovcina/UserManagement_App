import { PermissionActionTypes } from '../action-types/pemission.actiontypes';

const INITIAL_STATE = {
  permissions: null,
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case PermissionActionTypes.GET_PERMISSION_LIST_STARTED:
      return { ...state, loading: true };
    case PermissionActionTypes.GET_PERMISSION_LIST_SUCCESS:
      return { ...state, loading: false, permissions: payload };
    case PermissionActionTypes.GET_PERMISSION_LIST_FAILED:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
