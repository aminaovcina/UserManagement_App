import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserModuleLayoutComponent } from './layout/user-module-layout/user-module-layout.component';
import { UserPermissionsComponent } from './pages/user-permissions/user-permissions.component';
import { GlobalComponentsModule } from 'src/app/global-components/global-components.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    UserListComponent,
    UserModuleLayoutComponent,
    UserPermissionsComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    GlobalComponentsModule,
    NgSelectModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
  ],
})
export class UserModule {}
