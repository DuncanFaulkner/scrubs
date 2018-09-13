import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input()
  product: Product;
  @Output()
  selectedProduct: EventEmitter<string> = new EventEmitter();

  constructor(private route: Router) {}

  ngOnInit() {}

  onSelectedProduct(id: string) {
    console.log('id', id);
    this.selectedProduct.emit(id);
  }
}
