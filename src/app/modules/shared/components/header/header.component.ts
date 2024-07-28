import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';

import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '~modules/auth/services/auth.service';
import User from '~shared/interfaces/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, AvatarModule, MenuModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private authService: AuthService) {}

  // TASK
  get currentUser(): User | null {
    return this.authService.getUser();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Logout',
            icon: 'fa fa-sign-out',
            // TASK 3
            command: () => this.authService.logout(),
          },
        ],
      },
    ];
  }
}
