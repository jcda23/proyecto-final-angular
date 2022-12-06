import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth/auth.guard';
import { ListContainerComponent } from './books-list/container/list-container.component';
import { PrivateHomeComponent } from './index-private';
import { PrivateComponent } from './private.component';
import { ProfileContainerComponent } from './profile/container/profile-container.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: PrivateHomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profile',
        component: ProfileContainerComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'my-list',
        component: ListContainerComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
