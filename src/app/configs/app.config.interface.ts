export interface IAppConfig {
  bypassAuthorization: string;
  alertMilliseconds: number;
  defaultLang: string;
  languages: {
    es: string;
    en: string;
  };
  endpoints: {
    apiUrl: string;
    login: string;
    getTodos: string;
  };
}
