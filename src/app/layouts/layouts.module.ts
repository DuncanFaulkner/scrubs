import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { SharedModule } from '../shared/shared';

@NgModule({
  imports: [SharedModule, RouterModule],
  declarations: [LayoutsComponent]
})
export class LayoutsModule {
  constructor() {
    console.log(this.constructor.toString().match(/\w+/g)[1] + ': constructor');
  }
}
