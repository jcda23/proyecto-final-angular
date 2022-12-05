import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { BookContainerComponent } from './book/container/book-container.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUsersContainerComponent } from './list-users/container/list-users-container.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'add-book', component: BookContainerComponent },
      { path: 'list-users', component: ListUsersContainerComponent },
      { path: 'create-user-fake', component: CreateUserComponent },
      { path: 'create-user-fake/:id', component: CreateUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
