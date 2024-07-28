import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, Inject, INJECTOR, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APP_CONFIG } from 'src/app/configs/app.config';
import { IAppConfig } from 'src/app/configs/app.config.interface';
import { Todo } from '~shared/interfaces/todo';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AuthService } from '~modules/auth/services/auth.service';
import User from '~shared/interfaces/user';
import TodoResponse from '~shared/interfaces/todo-response';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, ButtonModule, CardModule, ScrollPanelModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Array<Todo>> = new Observable<Array<Todo>>();
  destroyRef = inject(DestroyRef);

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) public appConfig: IAppConfig,
  ) {}

  ngOnInit(): void {
    this.todos$ = this.httpClient.get<TodoResponse>(this.appConfig.endpoints.getTodos).pipe(
      map((r: TodoResponse) => r.todos),
      takeUntilDestroyed(this.destroyRef),
    );
  }

  // TASK 4
  get currentUser(): User | null {
    return this.authService.getUser();
  }
}
