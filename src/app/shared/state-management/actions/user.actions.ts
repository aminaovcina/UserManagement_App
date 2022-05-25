import { Action } from '@ngrx/store';
import { ActionParent } from 'src/app/models/action-parent.class';
import { UserActionTypes } from '../action-types/user.actiontypes';

export class GetUserList_ACTION implements ActionParent {
  type = UserActionTypes.GET_USER_LIST_STARTED;
  constructor(public payload: any) {}
}
export class GetUserListSuccess implements Action {
  type = UserActionTypes.GET_USER_LIST_SUCCESS;
  constructor(public payload: any) {}
}
export class GetUserListFailed implements Action {
  type = UserActionTypes.GET_USER_LIST_FAILED;
  constructor(public payload: any) {}
}

export class GetUser_ACTION implements ActionParent {
  type = UserActionTypes.GET_USER_STARTED;
  constructor(public payload: any) {}
}
export class GetUserSuccess implements Action {
  type = UserActionTypes.GET_USER_SUCCESS;
  constructor(public payload: any) {}
}
export class GetUserFailed implements Action {
  type = UserActionTypes.GET_USER_FAILED;
  constructor(public payload: any) {}
}

export class CreateUser_ACTION implements ActionParent {
  type = UserActionTypes.CREATE_USER_STARTED;
  constructor(public payload: any) {}
}
export class CreateUserSuccess implements Action {
  type = UserActionTypes.CREATE_USER_SUCCESS;
  constructor(public payload: any) {}
}
export class CreateUserFailed implements Action {
  type = UserActionTypes.CREATE_USER_FAILED;
  constructor(public payload: any) {}
}

export class UpdateUser_ACTION implements ActionParent {
  type = UserActionTypes.UPDATE_USER_STARTED;
  constructor(public payload: any) {}
}
export class UpdateUserSuccess implements Action {
  type = UserActionTypes.UPDATE_USER_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateUserFailed implements Action {
  type = UserActionTypes.UPDATE_USER_FAILED;
  constructor(public payload: any) {}
}

export class DeleteUser_ACTION implements ActionParent {
  type = UserActionTypes.DELETE_USER_STARTED;
  constructor(public payload: any) {}
}
export class DeleteUserSuccess implements Action {
  type = UserActionTypes.DELETE_USER_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteUserFailed implements Action {
  type = UserActionTypes.DELETE_USER_FAILED;
  constructor(public payload: any) {}
}

export class GetUserPermissions_ACTION implements ActionParent {
  type = UserActionTypes.GET_USER_PERMISSIONS_STARTED;
  constructor(public payload: any) {}
}
export class GetUserPermissionsSuccess implements Action {
  type = UserActionTypes.GET_USER_PERMISSIONS_SUCCESS;
  constructor(public payload: any) {}
}
export class GetUserPermissionsFailed implements Action {
  type = UserActionTypes.GET_USER_PERMISSIONS_FAILED;
  constructor(public payload: any) {}
}

export class AssignUserPermissions_ACTION implements ActionParent {
  type = UserActionTypes.ASSIGN_USER_PERMISSIONS_STARTED;
  constructor(public payload: any) {}
}
export class AssignUserPermissionsSuccess implements Action {
  type = UserActionTypes.ASSIGN_USER_PERMISSIONS_SUCCESS;
  constructor(public payload: any) {}
}
export class AssignUserPermissionsFailed implements Action {
  type = UserActionTypes.ASSIGN_USER_PERMISSIONS_FAILED;
  constructor(public payload: any) {}
}
