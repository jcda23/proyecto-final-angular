import { NgModule } from '@angular/core';
/* import { canActivate } from '@angular/fire/compat/auth-guard/auth-guard'; */
import { RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs/operators';
import { AdminComponent } from './admin.component';
import { BookContainerComponent } from './book/container/book-container.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUsersContainerComponent } from './list-users/container/list-users-container.component';
import { canActivate } from '@angular/fire/compat/auth-guard';

const uidAdmin1 = 'QchNxmiJZBMLopzmOIVrCwc9Xwx1';
const uidAdmin2 = 'XEo4ksXdrgOwjZunHp1WuKjVjZq2';

export const onlyAdmin = () =>
  map(
    (user: any) => (!!user && user.uid === uidAdmin1) || user.uid === uidAdmin2
  );

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'add-book',
        component: BookContainerComponent,
        ...canActivate(onlyAdmin),
      },
      {
        path: 'list-users',
        component: ListUsersContainerComponent,
        ...canActivate(onlyAdmin),
      },
      {
        path: 'create-user-fake',
        component: CreateUserComponent,
        ...canActivate(onlyAdmin),
      },
      {
        path: 'create-user-fake/:id',
        component: CreateUserComponent,
        ...canActivate(onlyAdmin),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
