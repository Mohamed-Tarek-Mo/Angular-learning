import { Component, effect, inject } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-producte-cart',
  imports: [],
  templateUrl: './producte-cart.html',
  styleUrl: './producte-cart.css',
})
export class ProducteCart {
  service = inject(Products);
  data = this.service.getCartProducts();
  eff = effect(() => {
    this.data = this.service.getCartProducts();
  });
  deleteFromCart(index: number) {
    this.service.deleteProductFromCart(index);
  }
}
