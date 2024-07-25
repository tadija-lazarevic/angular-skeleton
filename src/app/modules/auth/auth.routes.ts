import { Route } from '@angular/router';
import { appPaths } from '../../app.routes';
import { authPaths } from './shared/auth.routes';

export const AUTH_ROUTES: Route[] = [
  { path: authPaths.logIn, component: null, canActivate: [] },
  { path: '**', redirectTo: appPaths.error404 },
];
