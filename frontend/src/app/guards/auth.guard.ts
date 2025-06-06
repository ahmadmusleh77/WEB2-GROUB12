import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  // Store the attempted URL for redirecting after login
  const url = state.url;
  localStorage.setItem('redirectUrl', url);
  
  // Navigate to the login page
  router.navigate(['/login']);
  return false;
};

export const roleGuard = (allowedRoles: number[]): CanActivateFn => {
  return (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    
    if (!authService.isLoggedIn()) {
      router.navigate(['/login']);
      return false;
    }
    
    const userData = authService.getUserData();
    if (!userData || !userData.role_id) {
      router.navigate(['/login']);
      return false;
    }
    
    if (allowedRoles.includes(userData.role_id)) {
      return true;
    }
    
    // If role not allowed, redirect to appropriate dashboard based on role
    authService.redirectBasedOnRole();
    return false;
  };
};
