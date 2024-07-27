import { InjectionToken } from '@angular/core';
import { IAppConfig } from './app.config.interface';
import { environment } from '~environments/environment';

export const APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  bypassAuthorization: 'bypassAuthorization',
  alertMilliseconds: 3000,
  defaultLang: 'en',
  languages: {
    es: 'es',
    en: 'en',
  },
  endpoints: {
    apiUrl: environment.apiUrl,
    login: `${environment.apiUrl}auth/login`,
    getTodos: `${environment.apiUrl}todos`,
  },
};
