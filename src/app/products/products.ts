import { inject, Injectable, signal } from '@angular/core';
import { Iproducts } from './iproducts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private allProducts!: Iproducts[];

  http = inject(HttpClient);

  cartProducts = signal<string[]>([]);

  favoriteProducts = signal<Iproducts[]>([]);
  newprods!: Iproducts[];

  getAllProducts(): Observable<Iproducts[]> {
    // return this.allProducts;
    this.http
      .get<Iproducts[]>('https://dummyjson.com/products?limit=10&skip=20')
      .subscribe((res: any) => (this.allProducts = res.products));
    return this.http.get<Iproducts[]>('https://dummyjson.com/products?limit=10&skip=20');
  }

  getProductById(id: number): Observable<Iproducts> {
    // return this.allProducts.find((product) => product.id == id);
    return this.http.get<Iproducts>(`https://dummyjson.com/products/${id}`);
  }

  getCartProducts(): string[] {
    return this.cartProducts();
  }
  addProductToCart(id: number): void {
    let prod = this.allProducts.find((product) => product.id === id);
    if (!prod) return;
    if (this.cartProducts().includes(prod.title)) return;
    this.cartProducts.update((products) => [...products, prod.title]);
  }
  deleteProductFromCart(index: number): void {
    this.cartProducts.update((products) => products.filter((p, i) => i !== index));
  }

  getFavoriteProducts(): Iproducts[] {
    return this.favoriteProducts();
  }

  addProductToFavorite(id: number): void {
    let prod = this.allProducts.find((product) => product.id === id);
    if (!prod) return;
    this.favoriteProducts.update((products) => [...products, prod]);
  }

  deleteProductFromFavorite(index: number): void {
    this.favoriteProducts.update((products) => products.filter((p, i) => i !== index));
  }
}
