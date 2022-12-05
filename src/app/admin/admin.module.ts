import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AddBookContainerComponent } from './add-book/container/add-book-container.component';
import { AddBookComponent } from './add-book/components/add-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ListBookComponent } from './list-book/components/list-book.component';
import { ListBookContainerComponent } from './list-book/container/list-book-container.component';
import { BookComponent } from './book/components/book.component';
import { BookContainerComponent } from './book/container/book-container.component';
import { CoreModule } from '../core/core.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUsersComponent } from './list-users/components/list-users.component';
import { ListUsersContainerComponent } from './list-users/container/list-users-container.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
    AddBookComponent,
    AddBookContainerComponent,
    ListBookComponent,
    ListBookContainerComponent,
    BookComponent,
    BookContainerComponent,
    CreateUserComponent,
    ListUsersComponent,
    ListUsersContainerComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
})
export class AdminModule {}
