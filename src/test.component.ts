import { Component } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: 'test.component.html',
})
export class Test2Component {
  constructor() {  }

  ngOnInit() {
    console.log("test component");
  }
}
