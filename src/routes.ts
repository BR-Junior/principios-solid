import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';

const middleware = () => {console.log('roota get')}
const router = Router();

router.get('/user', (req, res) => {
  middleware()
  return res.status(201).send('ola');
});


router.post('/user', (req, res) => {
  return createUserController.handle(req, res);
});

export { router };