import { Component, EventEmitter } from '@angular/core';
import { SpinnerService } from './spinner.service';

declare var require: any;

//TODO CHANGE STYLE
@Component({
  selector: 'spinner',
  template: `
    <div class="container-loader" [class.show]="isDisplay">
        <div class="loader"></div>
    </div>
  `,
  styles: [ `
    .container-loader {
      z-index: 1003;
    }

      .container-loader .loader, .container-loader .loader:after {
        border-radius:50%;
        width:10em;
        height:10em;
      }

      .container-loader .loader {
        margin:60px auto;
        font-size:10px;
        position:relative;
        text-indent:-9999em;
        border-top:1.1em solid rgba(#fff, 0.2);
        border-right:1.1em solid rgba(#fff, 0.2);
        border-bottom:1.1em solid rgba(#fff, 0.2);
        border-left:1.1em solid rgba(#fff, 1);
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation:load8 1.1s infinite linear;
        animation:load8 1.1s infinite linear;
      }

      @-webkit-keyframes load8 {
        0% {
          -webkit-transform:rotate(0deg);
          transform:rotate(0deg);
        }

        100% {
          -webkit-transform:rotate(360deg);
          transform:rotate(360deg);
        }
      }
      @keyframes load8 {
        0% {
          -webkit-transform:rotate(0deg);
          transform:rotate(0deg);
        }

        100% {
          -webkit-transform:rotate(360deg);
          transform:rotate(360deg);
        }
      }
    }
    `
  ]
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
