import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent]
})
export class HomeModule {
  constructor() {
    console.log(this.constructor.toString().match(/\w+/g)[1] + ': constructor');
  }
}
