import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { ActionParent } from 'src/app/models/action-parent.class';
import { StatusService } from '../../services/status.service';
import { SnackbarService } from '../../utilities/snackbar.service';
import { StatusActionTypes } from '../action-types/status.actiontypes';
import * as statusActions from '../actions/status.actions';

@Injectable()
export class StatusEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private statusService: StatusService,
    private _mySnackbarService: SnackbarService
  ) {}
  getStatuses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StatusActionTypes.GET_STATUS_LIST_STARTED),
      mergeMap((action: ActionParent) => this.getStatuses(action.payload))
    )
  );

  getStatuses(payload: any) {
    return this.statusService.GetStatuses().pipe(
      map((data: any) => {
        return new statusActions.GetStatusListSuccess(data);
      }),
      catchError((err) => {
        this._mySnackbarService.showMessage(err.message);
        return of(new statusActions.GetStatusListFailed(err));
      })
    );
  }
}
