import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { FakeDbUserRepository } from './../../repositorios/implementatios/FakeDbUserRepository';


const fakeDbUserRepository = new FakeDbUserRepository();

const createUserUseCase = new CreateUserUseCase(fakeDbUserRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };