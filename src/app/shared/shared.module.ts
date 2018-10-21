import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ProductsComponent } from './product/products/products.component';

@NgModule({
  imports: [CommonModule, CdkTableModule, MaterialModule],
  declarations: [ProductsComponent],
  exports: [CommonModule, CdkTableModule, MaterialModule, ProductsComponent],
  providers: []
})
export class SharedModule {}
