import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/index-shared';
import { MaterialModule } from '../shared/material/material.module';

import { BrowseComponent, PrivateHomeComponent } from './index-private';
import { PrivateComponent } from './private.component';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { ProfileContainerComponent } from './profile/container/profile-container.component';
import { ListContainerComponent } from './books-list/container/list-container.component';
import { ListBooksComponent } from './books-list/components/list-books.component';

@NgModule({
  declarations: [
    PrivateComponent,
    BrowseComponent,
    PrivateHomeComponent,
    ProfileComponent,
    ProfileContainerComponent,
    ListBooksComponent,
    ListContainerComponent,
  ],

  imports: [
    CommonModule,
    PrivateRoutingModule,
    CoreModule,
    SharedModule,
    MaterialModule,
  ],
})
export class PrivateModule {}
