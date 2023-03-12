import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}
  
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    console.log('controller')
    try {
      await this.createUserUseCase.excute({name,email,password});
      return res.status(201).json(name);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}