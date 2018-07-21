import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared';
// import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent]
})
export class HomeModule {
  constructor() {
    console.log(this.constructor.toString().match(/\w+/g)[1] + ': constructor');
  }
}
