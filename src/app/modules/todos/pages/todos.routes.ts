export const todosPaths = {
  base: '',
  list: 'todos',
  add: 'add',
};

export const todosRoutes = {
  base: `/${todosPaths.base}`,
  list: `/${todosPaths.list}`,
  add: `/${todosPaths.list}/${todosPaths.add}`,
};
