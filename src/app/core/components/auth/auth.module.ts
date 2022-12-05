import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { CoreModule } from '../../index-core';
import { SharedModule } from 'src/app/shared/index-shared';

import {
  AuthComponent,
  FormLoginComponent,
  FormRegisterComponent,
  LoginComponent,
  RegisterComponent,
} from './index-auth';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    RegisterComponent,
    FormRegisterComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    MaterialModule,
  ],

  providers: [],
})
export class AuthModule {}
