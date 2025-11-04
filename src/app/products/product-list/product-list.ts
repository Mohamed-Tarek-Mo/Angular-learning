import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Products } from '../products';
import { ProductCard } from '../product-card/product-card';
import { Iproducts } from '../iproducts';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  service = inject(Products);
  httpRes = this.service.getAllProducts();
  data!: Iproducts[];
  cdr = inject(ChangeDetectorRef);
  constructor() {
    this.httpRes.subscribe((res: any) => {
      this.data = res.products;
      this.cdr.detectChanges();
    });
  }
}
