import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import permissions from '../../../../config/permissions';
import { PermissionModel } from 'src/app/models/user/permission.model';
import * as userActions from '../../../../shared/state-management/actions/user.actions';
import * as userSelectors from '../../../../shared/state-management/selectors/user.selectors';
import * as permissionActions from '../../../../shared/state-management/actions/permission.actions';
import * as permissionSelectors from '../../../../shared/state-management/selectors/permission.selectors';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.scss'],
})
export class UserPermissionsComponent implements OnInit {
  IS_UPDATE: boolean = false;
  LOADING: boolean = false;
  USER_PERMISSIONS = permissions;
  formDetails = this.fb.group({
    userId: [0],
    permissions: [[]],
  });
  constructor(
    private store: Store<any>,
    public fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.selectors();
  }
  selectors() {
    this.store
      .pipe(select(userSelectors.userPermissionsSelector))
      .subscribe((values) => {
        const { userPermissions, loading } = values;
        if (userPermissions) {
          this.LOADING = loading;
          this.formDetails.patchValue({
            ...userPermissions.data,
          });
        }
      });
    this.store
      .pipe(select(permissionSelectors.permissionsSelector))
      .subscribe((values) => {
        const { permissions, loading } = values;
        if (permissions) {
          this.LOADING = loading;
          this.USER_PERMISSIONS = permissions.data;
        }
      });
  }

  ngOnInit(): void {
    this.store.dispatch(new permissionActions.GetPermissionList_ACTION(null));
    //potrebno je napraviti clear kako bi se ocistila vrijednost u storu i ne bi selector vratio pogresnu
    //this.store.dispatch(new userActions.ClearUserPermissions_ACTION());
    this.LOADING = true;
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.store.dispatch(
          new userActions.GetUserPermissions_ACTION(params['id'])
        );
      }
    });
  }
  submit() {
    const form = this.formDetails.value;
    const postObj = {
      userId: form.userId,
      userPermissionIds: form.permissions.map((el: PermissionModel) => el.id),
    };
    this.store.dispatch(new userActions.AssignUserPermissions_ACTION(postObj));
  }
}
