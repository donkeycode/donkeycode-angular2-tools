import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SpinnerService {

  static event: EventEmitter<any>;

  static start() {
    return SpinnerService.event.emit({
      type: "show"
    });
  }

  static end() {
    return SpinnerService.event.emit({
      type: "hidden"
    });
  }

}
