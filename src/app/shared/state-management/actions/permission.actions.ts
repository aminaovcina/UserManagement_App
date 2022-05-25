import { Action } from '@ngrx/store';
import { ActionParent } from 'src/app/models/action-parent.class';
import { PermissionActionTypes } from '../action-types/pemission.actiontypes';

export class GetPermissionList_ACTION implements ActionParent {
  type = PermissionActionTypes.GET_PERMISSION_LIST_STARTED;
  constructor(public payload: any) {}
}
export class GetPermissionListSuccess implements Action {
  type = PermissionActionTypes.GET_PERMISSION_LIST_SUCCESS;
  constructor(public payload: any) {}
}
export class GetPermissionListFailed implements Action {
  type = PermissionActionTypes.GET_PERMISSION_LIST_FAILED;
  constructor(public payload: any) {}
}
