import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { appPaths } from 'src/app/app.routes';
import User from '~shared/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
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

  getUser(): User | null {
    let user: string | null = '';

    try {
      user = localStorage.getItem('user');
    } catch (error) {
      user = null;
    }

    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.setIsLoggedIn(false);
    this.router.navigate([appPaths.home]);
  }
}
