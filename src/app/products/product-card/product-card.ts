import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Products } from '../products';
import { Shadow } from '../../directives/shadow';
import { Iproducts } from '../iproducts';
import { CurrencyPipe } from '@angular/common';
import { ShortDescPipe } from '../short-desc-pipe';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, Shadow, CurrencyPipe, ShortDescPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  service = inject(Products);

  view = [{}];

  p = input.required<Iproducts>();

  addToCart(id: number) {
    this.service.addProductToCart(id);
  }

  addToFav(id: number) {
    this.service.addProductToFavorite(id);
  }
}
