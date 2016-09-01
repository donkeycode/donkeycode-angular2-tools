import { Directive, Input, HostListener, ElementRef } from '@angular/core';

/**
* <h2>This directive transforms the path of an image with another if it is not found.</h2>
* <h3>USAGE :</h3>
* `<img src="this.image.is.not" alt="description" [default]="YOUR/NEW/IMAGE" >`
*
* @attribute default (String) Path of another image.
* @returns Returns an another image defined in attribute "default", if image is not found.
*
* @author <img src="https://avatars.githubusercontent.com/sophielongo?size=30" alt="sophielongo"> sophielongo
* @version 0.0.1
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

  private updateUrl() {

    //If the replacement image is not found , a loop is not generated
    if (this.stopError) {
      return;
    }

    this.stopError = true;
    this.element.setAttribute('src', this.default);

  }

}
