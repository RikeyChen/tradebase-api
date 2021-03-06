import usersRoutes from './users';

const routes = {
  '/api/users': usersRoutes,
};

const useAllRoutes = (app) => {
  for (const path in routes) {
    app.use(path, routes[path]);
  }
}

export default useAllRoutes;
