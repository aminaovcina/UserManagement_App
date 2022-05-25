import { Action } from '@ngrx/store';
import { ActionParent } from 'src/app/models/action-parent.class';
import { StatusActionTypes } from '../action-types/status.actiontypes';

export class GetStatusList_ACTION implements ActionParent {
  type = StatusActionTypes.GET_STATUS_LIST_STARTED;
  constructor(public payload: any) {}
}
export class GetStatusListSuccess implements Action {
  type = StatusActionTypes.GET_STATUS_LIST_SUCCESS;
  constructor(public payload: any) {}
}
export class GetStatusListFailed implements Action {
  type = StatusActionTypes.GET_STATUS_LIST_FAILED;
  constructor(public payload: any) {}
}
