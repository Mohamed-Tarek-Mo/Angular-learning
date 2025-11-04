import { Component, signal } from '@angular/core';
import { ProductList } from './products/product-list/product-list';
import { ProducteCart } from './products/producte-cart/producte-cart';
import { FavoriteProduct } from './products/favorite-product/favorite-product';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Nav } from './shared/nav/nav';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    ProductList,
    ProducteCart,
    FavoriteProduct,
    RouterOutlet,
    RouterLinkWithHref,
    Nav,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app');
}
