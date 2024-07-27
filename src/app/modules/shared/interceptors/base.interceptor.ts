import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const baseInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('base interceptor...');
  const router = inject(Router);
  return next(req);
};
