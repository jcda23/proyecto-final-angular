import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PublicComponent,
  PublicHomeComponent,
  PublicNewsComponent,
} from './index-public';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', redirectTo: 'logout', pathMatch: 'full' },
      { path: 'logout', component: PublicHomeComponent },
      { path: 'news', component: PublicNewsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
