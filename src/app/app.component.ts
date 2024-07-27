import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '~shared/components/header/header.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { AuthService } from '~modules/auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, HeaderComponent, FooterComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isLoggedIn$: Observable<boolean> = new Observable<boolean>();

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.getIsLoggedIn();
  }
}
