import { Component, EventEmitter } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

declare var require: any;

@Component({
  selector: 'spinner',
  template: require('./spinner.html'),
  styles: [ require('./spinner.scss') ]
})
export class SpinnerComponent {
  emitter = new EventEmitter();
  isDisplay: boolean;

  ngOnInit() {
    SpinnerService.event = this.emitter;
    this.emitter.subscribe({
     next: (event: any) => {
       if (event.type === 'show') {
         this.isDisplay = true;
       }
       if (event.type === 'hidden') {
         this.isDisplay = false;
       }
     }
   });
  }
}
