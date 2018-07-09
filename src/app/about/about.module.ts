import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [AboutComponent]
})
export class AboutModule {
  constructor() {
    console.log(this.constructor.toString().match(/\w+/g)[1] + ': constructor');
  }
}
