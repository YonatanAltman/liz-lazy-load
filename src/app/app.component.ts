import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy-lib';
  time: Date;
  lib: string = '';

  constructor() {
    this.time = new Date();
  }

  load() {
    import('pptxgenjs').then((lib)=>{
      this.lib = lib.default?.name;
    })
  }
}
