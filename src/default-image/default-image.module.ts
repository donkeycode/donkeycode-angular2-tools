import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DefaultImageDirective } from './default-image.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DefaultImageDirective
  ],
  exports: [
    DefaultImageDirective
  ]
})
export class DefaultImageModule {
}
