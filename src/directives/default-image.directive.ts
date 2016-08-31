import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[default]'
})
export class DefaultImageDirective {
  @Input() default: string;
  @Input() selectorImg: string;

  element: HTMLElement;
  stopError : boolean;

  @HostListener('error') onError() {
    this.updateUrl();
  }

  constructor(private elementRef : ElementRef) {
    this.element = elementRef.nativeElement;
  }

  updateUrl() {

    if (this.stopError) {
      return;
    }

    this.stopError = true;
    this.element.setAttribute('src', this.default);

  }

}
