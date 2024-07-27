import { Route } from '@angular/router';
import { appPaths } from '../../app.routes';
import { authPaths } from './shared/auth.routes';
import { LoginComponent } from './pages/login/login/login.component';
import { noAuthenticationGuard } from '~shared/guards/no-authentication.guard';

export const AUTH_ROUTES: Route[] = [
  { path: authPaths.logIn, component: LoginComponent, canActivate: [noAuthenticationGuard] },
  { path: '**', redirectTo: appPaths.error404 },
];
