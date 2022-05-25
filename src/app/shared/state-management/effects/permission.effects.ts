import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { ActionParent } from 'src/app/models/action-parent.class';
import { PermissionService } from '../../services/permission.service';
import { SnackbarService } from '../../utilities/snackbar.service';
import { PermissionActionTypes } from '../action-types/pemission.actiontypes';
import * as permissionActions from '../actions/permission.actions';

@Injectable()
export class PermissionEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private permissionService: PermissionService,
    private _mySnackbarService: SnackbarService
  ) {}
  getPermissions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PermissionActionTypes.GET_PERMISSION_LIST_STARTED),
      mergeMap((action: ActionParent) => this.getPermissions(action.payload))
    )
  );

  getPermissions(payload: any) {
    return this.permissionService.GetPermissions().pipe(
      map((data: any) => {
        return new permissionActions.GetPermissionListSuccess(data);
      }),
      catchError((err) => {
        this._mySnackbarService.showMessage(err.message);
        return of(new permissionActions.GetPermissionListFailed(err));
      })
    );
  }
}
