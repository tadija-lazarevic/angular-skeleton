import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appPaths } from './app.routes';
import { authPaths, authRoutes } from './modules/auth/shared/auth.routes';
import { NotFoundComponent } from '~shared/pages/not-found/not-found.component';
import { todosPaths } from '~modules/todos/pages/todos.routes';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { spinnerInterceptor } from '~shared/interceptors/spinner.interceptor';
import { environment } from '~environments/environment';
import { baseInterceptor } from '~shared/interceptors/base.interceptor';
import { APP_CONFIG, AppConfig } from './configs/app.config';
import { authInterceptor } from '~shared/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Routes configuration
    provideRouter([
      {
        path: appPaths.home,
        redirectTo: authRoutes.logIn,
        pathMatch: 'full',
      },
      {
        path: authPaths.base,
        loadChildren: () => import('./modules/auth/auth.routes').then(mod => mod.AUTH_ROUTES),
      },
      {
        path: todosPaths.list,
        loadChildren: () => import('./modules/todos/todo.routes').then(mod => mod.TODO_ROUTES),
      },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '404' },
    ]),

    // HTTP Client configuration
    provideHttpClient(withInterceptors([authInterceptor, spinnerInterceptor, baseInterceptor])),

    // Application configuration
    { provide: APP_CONFIG, useValue: AppConfig },
  ],
};
