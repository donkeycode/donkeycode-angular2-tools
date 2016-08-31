export * from './directives/default-image.directive';
export * from './directives/test.component.ts';
export * from './test.component.ts';

import { DefaultImageDirective } from './directives/default-image.directive';
import { Test2Component } from './test.component.ts';
import { TestComponent } from './directives/test.component.ts';

export default {
  directives: [
    DefaultImageDirective,
    Test2Component,
    TestComponent
  ],
  providers: []
};
