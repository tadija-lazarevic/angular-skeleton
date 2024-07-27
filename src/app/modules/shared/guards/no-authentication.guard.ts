import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { appPaths } from 'src/app/app.routes';
import { AuthService } from '~modules/auth/services/auth.service';
import { todosPaths } from '~modules/todos/pages/todos.routes';

export const noAuthenticationGuard = () => {
  const authService: AuthService = inject(AuthService);
  if (!authService.getIsLoggedInValue()) {
    return true;
  } else {
    const router: Router = inject(Router);
    router.navigate([todosPaths.list]);
    return false;
  }
};
