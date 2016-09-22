import { NgModule } from '@angular/core';

// DIRECTIVES
import { DefaultImageModule } from './default-image';
export { DefaultImageModule } from './default-image';

//Component
//import { SpinnerComponent } from './components/spinner/spinner.component';
//export * from './components/spinner/spinner.component';

// SERVICES
//export * from './services/base-request.service';
//export * from './services/base-user.service';

@NgModule({
  exports: [
    DefaultImageModule
  ],
  providers: []
})
export class DonkerCodeModule {
}
