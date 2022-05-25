import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs';
import { PermissionModel } from 'src/app/models/user/permission.model';
import { StatusModel } from 'src/app/models/user/status.model';
import { MatAccordion } from '@angular/material/expansion';
import statuses from 'src/app/config/statuses';
import permissions from 'src/app/config/permissions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @Output() onFilter: EventEmitter<unknown> = new EventEmitter();
  //treba napraviti dispatch i select iz baze
  STATUSES = statuses;
  USER_PERMISSIONS = permissions;
  GlobalSearchForm = this.fb.group({
    userPermissions: [[]],
    search: [''],
    status: [''],
  });

  constructor(public fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.onFormChange();
  }

  onFormChange(): void {
    this.GlobalSearchForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => {
        const returnSearchObj = {
          ...{ search: val.search },
          ...{
            permissions: val.userPermissions.map(
              (el: PermissionModel) => el.id
            ),
          },
          ...{
            statusId: val.status.id,
          },
        };
        this.onFilter.emit(returnSearchObj);
      });
  }
}
