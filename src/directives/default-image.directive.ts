import { Directive, Input, HostListener, ElementRef } from '@angular/core';

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

  constructor(private elementRef: ElementRef) {}

  updateUrl() {

    if (this.stopError) {
      return;
    }

    this.stopError = true;
    this.elementRef.nativeElement.attr('src', this.default);

  }

}
