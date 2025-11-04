import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  localStorage.setItem('auth', 'true');

  if (!(localStorage.getItem('auth') === 'true')) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
