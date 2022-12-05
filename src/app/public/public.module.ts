import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import {
  HeroImageComponent,
  PublicHomeComponent,
  PublicComponent,
  StoryCardComponent,
} from './index-public';

import { AuthService, CoreModule } from '../core/index-core';
import { BookNewsComponent } from './news/components/book-news/book-news.component';
import { PublicNewsComponent } from './news/container/public-news/public-news.component';
import { SharedModule } from '../shared/index-shared';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PublicComponent,
    HeroImageComponent,
    StoryCardComponent,
    PublicHomeComponent,
    BookNewsComponent,
    PublicNewsComponent,
  ],
  imports: [CommonModule, CoreModule, SharedModule, PublicRoutingModule],
  providers: [],
})
export class PublicModule {}
