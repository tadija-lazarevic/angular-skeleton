export const todosPaths = {
  base: '',
  list: 'todos',
  add: 'add', // TASK 5
};

export const todosRoutes = {
  base: `/${todosPaths.base}`,
  list: `/${todosPaths.list}`,
  add: `/${todosPaths.list}/${todosPaths.add}`, // TASK 5
};
