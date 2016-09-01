// DIRECTIVES
export * from './directives/default-image.directive';
import { DefaultImageDirective } from './directives/default-image.directive';

//Component
import { SpinnerComponent } from './components/spinner/spinner.component';
export * from './components/spinner/spinner.component';

// SERVICES
export * from './services/base-request.service';
export * from './services/base-user.service';

export default {
  directives: [
    DefaultImageDirective,
    SpinnerComponent
  ]
};
