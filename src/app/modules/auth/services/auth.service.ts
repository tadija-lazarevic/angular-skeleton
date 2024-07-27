import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import User from '~shared/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(Boolean(localStorage.getItem('user')));

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  getIsLoggedInValue(): boolean {
    return this.isLoggedIn$.value;
  }

  setIsLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedIn$.next(isLoggedIn);
  }

  getUser(): string {
    return localStorage.getItem('user') || '';
  }
}
