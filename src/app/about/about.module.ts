import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [AboutRoutingModule, SharedModule],
  declarations: [AboutComponent]
})
export class AboutModule {
  constructor() {
    console.log(this.constructor.toString().match(/\w+/g)[1] + ': constructor');
  }
}
