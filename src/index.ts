// DIRECTIVES
export * from './directives/default-image.directive';
import { DefaultImageDirective } from './directives/default-image.directive';

// SERVICES
export * from './services/base-request.service';
import { BaseRequestService } from './services/base-request.service';
export * from './services/base-user.service';
import { BaseUserService } from './services/base-user.service';

export default {
  directives: [
    DefaultImageDirective
  ],
  providers: [
    BaseRequestService,
    BaseUserService
  ]
};
