import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APP_CONFIG } from 'src/app/configs/app.config';
import { IAppConfig } from 'src/app/configs/app.config.interface';
import { Todo } from '~shared/interfaces/todo';
import TodoResponse from '~shared/interfaces/todo-response';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(
    @Inject(APP_CONFIG) public appConfig: IAppConfig,
    private httpClient: HttpClient,
  ) {}

  getTodos(): Observable<Array<Todo>> {
    return this.httpClient
      .get<TodoResponse>(this.appConfig.endpoints.getTodos)
      .pipe(map((r: TodoResponse) => r.todos));
  }

  postTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.appConfig.endpoints.getTodos, todo);
  }

  deleteTodo(id: string): Observable<any> {
    return this.httpClient.delete(this.appConfig.endpoints.getTodos, { params: { id } });
  }
}
