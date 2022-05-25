import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { MatPaginatorConfig } from 'src/app/models/shared/mat-paginator-model';
import { PaginationModel } from 'src/app/models/shared/pagination.model';
import { UserSearchFilter } from 'src/app/models/user/user-search-filter.model';
import * as userActions from '../../../../shared/state-management/actions/user.actions';
import * as userSelectors from '../../../../shared/state-management/selectors/user.selectors';
import { MatSort, Sort } from '@angular/material/sort';
import { MatSortConfig } from 'src/app/models/shared/mat-sort-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  LOADING = false;
  USERS = [];
  UserId: number;
  //table config
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'username',
    'email',
    'status',
    'assign',
    'edit',
    'delete',
  ];
  paginatorConfig = new MatPaginatorConfig();
  getRequestConfig = new UserSearchFilter();
  sortConfig = new MatSortConfig();
  constructor(private store: Store<any>, private modalService: NgbModal) {
    this.selectors();
  }
  selectors() {
    this.store.pipe(select(userSelectors.usersSelector)).subscribe((values) => {
      const { users, loading } = values;
      this.LOADING = loading;
      if (users) {
        console.log(users);
        this.paginatorConfig = {
          ...this.paginatorConfig,
          length: users.data.total,
        };
        this.USERS = users.data.data;
      }
    });
  }
  getUsers() {
    this.store.dispatch(
      new userActions.GetUserList_ACTION(this.getRequestConfig)
    );
  }
  onFilter(filterObj: any) {
    this.paginatorConfig = new MatPaginatorConfig();
    this.getRequestConfig = {
      ...this.getRequestConfig,
      page: this.paginatorConfig.page - 1,
      pageSize: this.paginatorConfig.pageSize,
    };
    this.getRequestConfig = { ...this.getRequestConfig, ...filterObj };
    this.getUsers();
  }

  onPaginatorPageChange($event: any) {
    this.paginatorConfig = {
      ...this.paginatorConfig,
      page: $event.pageIndex,
      pageSize: $event.pageSize,
    };
    this.getRequestConfig = {
      ...this.getRequestConfig,
      page: this.paginatorConfig.page,
      pageSize: this.paginatorConfig.pageSize,
    };
    this.getUsers();
  }
  sortChange(active: string) {
    this.sortConfig = {
      ...this.sortConfig,
      active: active,
      direction: this.sortConfig.direction == 'asc' ? 'desc' : 'asc',
    };
    this.getRequestConfig = {
      ...this.getRequestConfig,
      sort: this.sortConfig.active,
      order: this.sortConfig.direction,
    };
    this.getUsers();
  }
  //trebalo bi implementirati kroz odvojenu modal komponentu
  open(content: any, userId: number) {
    this.modalService.open(content);
    this.UserId = userId;
  }
  delete() {
    this.modalService.dismissAll();
    this.store.dispatch(new userActions.DeleteUser_ACTION(this.UserId));
  }
  ngOnInit(): void {
    this.getUsers();
  }
}
