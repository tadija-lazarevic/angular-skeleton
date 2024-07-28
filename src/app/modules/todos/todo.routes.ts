import { Route } from '@angular/router';
import { todosPaths } from './pages/todos.routes';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { appPaths } from 'src/app/app.routes';
import { authenticationGuard } from '~shared/guards/authentication.guard';

export const TODO_ROUTES: Route[] = [
  { path: todosPaths.base, component: TodoListComponent, canActivate: [authenticationGuard] },
  { path: '**', redirectTo: appPaths.home },
];
