import { Routes } from '@angular/router';
import { ProductList } from './products/product-list/product-list';
import { ProducteCart } from './products/producte-cart/producte-cart';
import { FavoriteProduct } from './products/favorite-product/favorite-product';
import { NotFound } from './shared/not-found/not-found';
import { ProdDetails } from './products/prod-details/prod-details';
import { authGuardGuard } from './auth/auth-guard-guard';
import { Register } from './auth/register/register';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ProductList,
    canActivate: [authGuardGuard],
  },
  {
    path: 'cart',
    component: ProducteCart,
  },
  {
    path: 'favorite',
    component: FavoriteProduct,
  },
  {
    path: 'products/:id',
    component: ProdDetails,
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    component: Register,
  },

  {
    path: '**',
    component: NotFound,
  },
];
