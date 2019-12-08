import { Router } from 'express'; // pega so o router do express
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middleware/auth';

const routes = new Router();

/*
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'rag',
    email: 'asdsd@aa.com',
    password_hash: 'asdadas',
  });

  return res.json(user);
});
*/

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // como esta definido apos as rotas anteriores vale para as rotas apos...
routes.put('/users', UserController.update);

export default routes;
