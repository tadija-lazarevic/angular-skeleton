import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { appRoutes } from 'src/app/app.routes';
import { AuthService } from '~modules/auth/services/auth.service';

export const authenticationGuard = () => {
  const authService: AuthService = inject(AuthService);
  const isLoggedIn = authService.getIsLoggedInValue();
  const router: Router = inject(Router);

  if (isLoggedIn) {
    return true;
  } else {
    router.navigate([appRoutes.home]);
    return false;
  }
};
