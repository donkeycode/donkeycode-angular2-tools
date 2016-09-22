import { NgModule } from '@angular/core';

// DIRECTIVES
import { DefaultImageModule } from './default-image';
export { DefaultImageModule } from './default-image';

//Component
import { SpinnerComponent } from './spinner';
export * from './spinner';

// SERVICES
export * from './services/base-request.service';
export * from './services/base-user.service';

@NgModule({
  exports: [
    DefaultImageModule,
    SpinnerComponent
  ],
  providers: []
})
export class DonkerCodeModule {
}
