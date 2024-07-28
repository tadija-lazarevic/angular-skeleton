import { Component, DestroyRef, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from 'src/app/configs/app.config';
import { IAppConfig } from 'src/app/configs/app.config.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { todosPaths } from '~modules/todos/pages/todos.routes';
import { AuthService } from '~modules/auth/services/auth.service';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, NgIf, DividerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  readonly USERNAME_MIN_LENGTH = 5;
  readonly PASSWORD_MIN_LENGTH = 5;
  destroyRef = inject(DestroyRef);

  company = 'Lokalise';
  created_by = $localize`Created by ${this.company}`;

  formGroup: FormGroup = new FormGroup({
    username: new FormControl<string>('', [
      Validators.minLength(this.USERNAME_MIN_LENGTH),
      Validators.required,
    ]),
    password: new FormControl<string>('', [
      Validators.minLength(this.PASSWORD_MIN_LENGTH),
      Validators.required,
    ]),
  });

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private authService: AuthService,
    @Inject(APP_CONFIG) public appConfig: IAppConfig,
  ) {}

  onSubmit(): void {
    if (!this.formGroup.valid) {
      return;
    }

    this.httpClient
      .post(this.appConfig.endpoints.login, this.formGroup.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: data => {
          localStorage.setItem('user', JSON.stringify({ ...data, id: 13 }));
          this.authService.setIsLoggedIn(true);
          this.router.navigate([todosPaths.list]);
        },
        error: error => {
          alert(error?.message);
        },
      });
  }
}
