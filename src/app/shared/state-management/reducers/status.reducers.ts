import { StatusActionTypes } from '../action-types/status.actiontypes';

const INITIAL_STATE = {
  statuses: null,
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case StatusActionTypes.GET_STATUS_LIST_STARTED:
      return { ...state, loading: true };
    case StatusActionTypes.GET_STATUS_LIST_SUCCESS:
      return { ...state, loading: false, statuses: payload };
    case StatusActionTypes.GET_STATUS_LIST_FAILED:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
