import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { ActionParent } from 'src/app/models/action-parent.class';
import { UserSearchFilter } from 'src/app/models/user/user-search-filter.model';
import { UserService } from '../../services/user.service';
import { SnackbarService } from '../../utilities/snackbar.service';
import { UserActionTypes } from '../action-types/user.actiontypes';
import * as userActions from '../actions/user.actions';
import { Location } from '@angular/common';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private userService: UserService,
    private _mySnackbarService: SnackbarService
  ) {}
  // CREATE USER
  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.CREATE_USER_STARTED),
      mergeMap((action: ActionParent) => this.createUser(action.payload))
    )
  );
  createUser(payload: any) {
    return this.userService.CreateUser(payload).pipe(
      switchMap((data: any) => {
        this._mySnackbarService.showMessage('User sucessfully created.');
        this.location.back();
        return [
          new userActions.CreateUserSuccess(data),
          new userActions.GetUserList_ACTION(new UserSearchFilter()),
        ];
      }),
      catchError((err) => {
        this._mySnackbarService.showMessage(err.error?.Message);
        return of(new userActions.CreateUserFailed(err));
      })
    );
  }
  // UPDATE USER
  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.UPDATE_USER_STARTED),
      mergeMap((action: ActionParent) => this.updateUser(action.payload))
    )
  );
  updateUser(payload: any) {
    return this.userService.UpdateUser(payload).pipe(
      switchMap((data: any) => {
        this._mySnackbarService.showMessage('User sucessfully edited.');
        this.location.back();
        return [
          new userActions.UpdateUserSuccess(data),
          new userActions.GetUserList_ACTION(new UserSearchFilter()),
        ];
      }),
      catchError((err) => {
        this._mySnackbarService.showMessage(err.error?.message);
        return of(new userActions.UpdateUserFailed(err));
      })
    );
  }
  // ASSIGN USER PERMISSIONS
  assignUserPermissions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.ASSIGN_USER_PERMISSIONS_STARTED),
      mergeMap((action: ActionParent) =>
        this.assignUserPermissions(action.payload)
      )
    )
  );

  assignUserPermissions(payload: any) {
    return this.userService.AssignUserPermissions(payload).pipe(
      switchMap((data: any) => {
        this._mySnackbarService.showMessage(
          'User assigned permissions sucessfully edited.'
        );
        return [new userActions.AssignUserPermissionsSuccess(data)];
      }),
      catchError((err) => {
        this._mySnackbarService.showMessage(err.error?.Message);
        return of(new userActions.AssignUserPermissionsFailed(err));
      })
    );
  }
  // GET ALL USERS
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.GET_USER_LIST_STARTED),
      mergeMap((action: ActionParent) => this.getUsers(action.payload))
    )
  );

  getUsers(payload: any) {
    return this.userService.GetUsers(payload).pipe(
      map((data: any) => {
        return new userActions.GetUserListSuccess(data);
      }),
      catchError((err) => {
        this._mySnackbarService.showMessage(err.error?.Message);
        return of(new userActions.GetUserListFailed(err));
      })
    );
  }
  // GET USER BY ID
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.GET_USER_STARTED),
      mergeMap((action: ActionParent) => this.getUser(action.payload))
    )
  );
  getUser(payload: any) {
    return this.userService.GetUser(payload).pipe(
      map((data: any) => {
        return new userActions.GetUserSuccess(data);
      }),
      catchError((err) => {
        this._mySnackbarService.showMessage(err.error?.Message);
        return of(new userActions.GetUserFailed(err));
      })
    );
  }
  // GET USER ASSIGNED PERMISSIONS
  getUserPermissions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.GET_USER_PERMISSIONS_STARTED),
      mergeMap((action: ActionParent) =>
        this.getUserPermissions(action.payload)
      )
    )
  );
  getUserPermissions(payload: any) {
    return this.userService.GetUserPermissions(payload).pipe(
      map((data: any) => {
        return new userActions.GetUserPermissionsSuccess(data);
      }),
      catchError((err) => {
        this._mySnackbarService.showMessage(err.error?.Message);
        return of(new userActions.GetUserPermissionsFailed(err));
      })
    );
  }
  // DELETE USER
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.DELETE_USER_STARTED),
      mergeMap((action: ActionParent) => this.deleteUser(action.payload))
    )
  );

  deleteUser(payload: any) {
    return this.userService.DeleteUser(payload).pipe(
      switchMap((data: any) => {
        this._mySnackbarService.showMessage('Korisnik uspješno obrisan.');
        return [
          new userActions.DeleteUserSuccess(data),
          new userActions.GetUserList_ACTION(new UserSearchFilter()),
        ];
      }),
      catchError((err) => {
        this._mySnackbarService.showMessage(err.error?.Message);
        return of(new userActions.DeleteUserFailed(err));
      })
    );
  }
}
