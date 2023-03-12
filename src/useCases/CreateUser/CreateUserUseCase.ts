import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositorios/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

// function validacao(data:string){
//   if(data.length == 1) throw new Error('err bom')
// }
export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository){}
  
  
  async excute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }
    const user = new User(data);
    //validacao(user.name)
    await this.usersRepository.save(user);
  }
}