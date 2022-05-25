import { UserActionTypes } from '../action-types/user.actiontypes';

const INITIAL_STATE = {
  users: null,
  user: null,
  loading: false,
  error: null,
  userPermissions: null,
};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case UserActionTypes.CREATE_USER_STARTED:
      return { ...state, loading: true };
    case UserActionTypes.CREATE_USER_SUCCESS:
      return { ...state, loading: false, user: payload };
    case UserActionTypes.CREATE_USER_FAILED:
      return { ...state, loading: false, error: payload };

    case UserActionTypes.UPDATE_USER_STARTED:
      return { ...state, loading: true };
    case UserActionTypes.UPDATE_USER_SUCCESS:
      return { ...state, loading: false, user: payload };
    case UserActionTypes.UPDATE_USER_FAILED:
      return { ...state, loading: false, error: payload };

    case UserActionTypes.GET_USER_STARTED:
      return { ...state, loading: true };
    case UserActionTypes.GET_USER_SUCCESS:
      return { ...state, loading: false, user: payload };
    case UserActionTypes.GET_USER_FAILED:
      return { ...state, loading: false, error: payload };

    case UserActionTypes.GET_USER_LIST_STARTED:
      return { ...state, loading: true };
    case UserActionTypes.GET_USER_LIST_SUCCESS:
      return { ...state, loading: false, users: payload };
    case UserActionTypes.GET_USER_LIST_FAILED:
      return { ...state, loading: false, error: payload };

    case UserActionTypes.DELETE_USER_STARTED:
      return { ...state, loading: true };
    case UserActionTypes.DELETE_USER_SUCCESS:
      return { ...state, loading: false };
    case UserActionTypes.DELETE_USER_FAILED:
      return { ...state, loading: false, error: payload };

    case UserActionTypes.GET_USER_PERMISSIONS_STARTED:
      return { ...state, loading: true };
    case UserActionTypes.GET_USER_PERMISSIONS_SUCCESS:
      return { ...state, loading: false, userPermissions: payload };
    case UserActionTypes.GET_USER_PERMISSIONS_FAILED:
      return { ...state, loading: false, error: payload };

    case UserActionTypes.ASSIGN_USER_PERMISSIONS_STARTED:
      return { ...state, loading: true };
    case UserActionTypes.ASSIGN_USER_PERMISSIONS_SUCCESS:
      return { ...state, loading: false, userPermissions: payload };
    case UserActionTypes.ASSIGN_USER_PERMISSIONS_FAILED:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
