import { Directive, Input, HostListener } from '@angular/core';

declare var $ : any;

@Directive({
  selector: 'img[default]'
})
export class DefaultImageDirective {
  @Input() default: string;
  @Input() selectorImg: string;

  stopError : boolean;


  @HostListener('error') onError() {
    this.updateUrl();
  }

  updateUrl() {

    if (this.stopError) {
      return;
    }

    this.stopError = true;

    $('img[id="' + this.selectorImg + '"]').attr('src', this.default);

  }

}
