import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services';
import { Product } from 'src/app/interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  data: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      data => {
        this.data = data;
      },
      error => console.log({ error })
    );
  }
}
