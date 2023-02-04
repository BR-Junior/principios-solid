import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';

const router = Router();

router.get('/user', (req, res) => {
  return res.status(201).send('ola');
});


router.post('/user', (req, res) => {
  return createUserController.handle(req, res);
});

export { router };