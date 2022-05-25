import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModuleLayoutComponent } from './layout/user-module-layout/user-module-layout.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserPermissionsComponent } from './pages/user-permissions/user-permissions.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UserModuleLayoutComponent,
    data: { breadcrumb: 'User management' },
    children: [
      { path: '', component: UsersComponent, data: { breadcrumb: '' } },
      {
        path: 'create',
        component: UserDetailsComponent,
        data: { breadcrumb: 'Create' },
      },
      {
        path: 'edit/:id',
        component: UserDetailsComponent,
        data: { breadcrumb: 'Edit' },
      },
      {
        path: 'permissions/:id',
        component: UserPermissionsComponent,
        data: { breadcrumb: 'User permissions' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
