import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared';

@NgModule({
  imports: [SharedModule, CommonModule, ProductRoutingModule],
  declarations: [ProductComponent]
})
export class ProductModule {
  constructor() {
    console.log(this.constructor.toString().match(/\w+/g)[1] + ': constructor');
  }
}
