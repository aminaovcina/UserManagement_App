import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  public snackbarRef: MatSnackBarRef<any>;
  constructor(private _snackBar: MatSnackBar) {}

  showMessage(message: string, action = '', callback?: () => void) {
    this.snackbarRef = this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: 'snack-bar-class',
    });

    this.snackbarRef.onAction().subscribe(() => {
      callback && callback();
    });
  }
}
