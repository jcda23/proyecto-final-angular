import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      { path: 'home', component: PrivateHomeComponent },
      { path: 'profile', component: ProfileContainerComponent },
      { path: 'my-list', component: ListContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
