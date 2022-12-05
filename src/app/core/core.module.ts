import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';

import {
  FooterComponent,
  HeaderPrivateComponent,
  HeaderPublicComponent,
  MainNotfoundComponent,
  NotfoundComponent,
} from './index-core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotfoundComponent,
    MainNotfoundComponent,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    FooterComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, MaterialModule],
  exports: [
    NotfoundComponent,
    MainNotfoundComponent,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    FooterComponent,
  ],
  providers: [],
})
export class CoreModule {}
