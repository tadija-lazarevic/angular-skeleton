import { Todo } from './todo';

interface TodoResponse {
  todos: Array<Todo>;
  total: number;
}

export default TodoResponse;
