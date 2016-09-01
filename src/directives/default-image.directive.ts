import { Directive, Input, HostListener, ElementRef } from '@angular/core';

/**
* This directive transforms the path of an image with another if it is not found.
*
* @usage default `<img sss>`
* @param default (String) Path of another image.
* @returns Returns a image by default if image is not found.
**/
@Directive({
  selector: 'img[default]'
})
export class DefaultImageDirective {
  @Input() default: string;

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
