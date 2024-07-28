import { InjectionToken } from '@angular/core';
import { IAppConfig } from './app.config.interface';

export const APP_CONFIG = new InjectionToken('app.config');

const API_URL = 'https://dummyjson.com/';

export const AppConfig: IAppConfig = {
  bypassAuthorization: 'bypassAuthorization',
  alertMilliseconds: 3000,
  defaultLang: 'en',
  languages: {
    es: 'es',
    en: 'en',
  },
  endpoints: {
    apiUrl: API_URL,
    login: `${API_URL}auth/login`,
    getTodos: `${API_URL}todos`,
    postTodo: `${API_URL}todos/add`,
    deleteTodo: `${API_URL}todos/:id`,
  },
};
