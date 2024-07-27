import { Route } from '@angular/router';
import { todosPaths } from './pages/todos.routes';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { appPaths } from 'src/app/app.routes';
import { authenticationGuard } from '~shared/guards/authentication.guard';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';

export const TODO_ROUTES: Route[] = [
  { path: todosPaths.base, component: TodoListComponent, canActivate: [authenticationGuard] },
  { path: todosPaths.add, component: TodoAddComponent, canActivate: [authenticationGuard] },
  { path: '**', redirectTo: appPaths.home },
];
