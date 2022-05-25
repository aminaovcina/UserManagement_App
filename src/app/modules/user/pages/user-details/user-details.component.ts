import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as userActions from '../../../../shared/state-management/actions/user.actions';
import * as userSelectors from '../../../../shared/state-management/selectors/user.selectors';
import * as statusActions from '../../../../shared/state-management/actions/status.actions';
import * as statusSelectors from '../../../../shared/state-management/selectors/status.selectors';
import { StatusModel } from 'src/app/models/user/status.model';
import statuses from 'src/app/config/statuses';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  IS_UPDATE: boolean = false;
  LOADING: boolean = false;
  STATUSES = statuses;
  formDetails = this.fb.group({
    userId: [0],
    status: [],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  get firstName() {
    return this.formDetails.get('firstName');
  }
  get lastName() {
    return this.formDetails.get('lastName');
  }
  get username() {
    return this.formDetails.get('username');
  }
  get email() {
    return this.formDetails.get('email');
  }
  get password() {
    return this.formDetails.get('password');
  }
  get confirmPassword() {
    return this.formDetails.get('confirmPassword');
  }
  constructor(
    private store: Store<any>,
    public fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.selectors();
  }
  selectors() {
    this.store.pipe(select(userSelectors.userSelector)).subscribe((values) => {
      const { user, loading } = values;
      if (user && this.IS_UPDATE) {
        this.LOADING = loading;
        this.formDetails.patchValue({
          ...user.data,
        });
      }
    });
    this.store
      .pipe(select(statusSelectors.statusesSelector))
      .subscribe((values) => {
        const { statuses, loading } = values;
        if (statuses) {
          this.LOADING = loading;
          this.STATUSES = statuses.data;
        }
      });
  }

  ngOnInit(): void {
    this.store.dispatch(new statusActions.GetStatusList_ACTION(null));
    //potrebno je napraviti clear kako bi se ocistila vrijednost u storu i ne bi selector vratio pogresnu
    //this.store.dispatch(new userActions.ClearUser_ACTION());
    this.LOADING = true;
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.IS_UPDATE = true;
        this.store.dispatch(new userActions.GetUser_ACTION(params['id']));
      } else {
        this.IS_UPDATE = false;
        this.LOADING = true;
        this.formDetails.valueChanges.subscribe((frm) => {
          const password = frm.password;
          const confirm = frm.confirmPassword;
          if (password !== confirm) {
            this.confirmPassword?.setErrors({ mismatch: true });
          } else {
            this.confirmPassword?.setErrors(null);
          }
        });
      }
    });
  }
  submit() {
    const form = this.formDetails.value;
    const postObj = {
      userId: form.userId,
      statusId: form.status.id,
      firstName: form.firstName,
      lastName: form.lastName,
      username: form.username,
      password: form.password,
      email: form.email,
    };
    console.log(postObj);
    if (this.IS_UPDATE) {
      this.store.dispatch(new userActions.UpdateUser_ACTION(postObj));
    } else {
      this.store.dispatch(new userActions.CreateUser_ACTION(postObj));
    }
  }
}
