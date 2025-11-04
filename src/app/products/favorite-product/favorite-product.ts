import { Component, effect, inject } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-favorite-product',
  imports: [],
  templateUrl: './favorite-product.html',
  styleUrl: './favorite-product.css',
})
export class FavoriteProduct {
  service = inject(Products);
  data = this.service.getFavoriteProducts();
  eff = effect(() => {
    this.data = this.service.getFavoriteProducts();
  });

  deleteFromFavorite(index: number) {
    this.service.deleteProductFromFavorite(index);
  }
}
