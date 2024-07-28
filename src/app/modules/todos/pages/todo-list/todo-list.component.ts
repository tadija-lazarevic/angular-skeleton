import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '~shared/interfaces/todo';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TodoService } from '~modules/todos/services/todo.service';

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

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }
}
