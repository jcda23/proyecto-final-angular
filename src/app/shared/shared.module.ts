import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardBookComponent } from './components/card-book/card-book.component';
import { BackgroundVideoComponent } from './components/background-video/background-video.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [CardBookComponent, BackgroundVideoComponent, SpinnerComponent],
  imports: [HttpClientModule, ReactiveFormsModule, FormsModule],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CardBookComponent,
    BackgroundVideoComponent,
    SpinnerComponent,
  ],
  providers: [],
})
export class SharedModule {}
