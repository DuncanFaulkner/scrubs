import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      data => {
        console.log({ data });
      },
      error => console.log({ error })
    );
  }
}
