import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './spinner.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SpinnerComponent,
    SpinnerService
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SpinnerModule {
}
