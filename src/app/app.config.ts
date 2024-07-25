import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appPaths } from './app.routes';
import { authRoutes } from './modules/auth/shared/auth.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      {
        path: appPaths.home,
        redirectTo: authRoutes.logIn,
        pathMatch: 'full',
      },
    ]),
  ],
};
