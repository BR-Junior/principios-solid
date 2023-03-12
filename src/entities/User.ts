import { uuid } from 'uuidv4';
function validacao(data:string){
  if(data.length <= 1) throw new Error('errr bom')
  if(data.includes('1')) throw new Error('erro rgex')
}
export class User {
  readonly id: string;
  name: string;
  email: string;
  password: string;
  
  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) {this.id = uuid();}
    validacao(props.name)
    
    
  }
}
  

// type Props = {
//   id?: string
//   nome: string
//   email: string 
// }

// class User2 {
//     constructor(public props: Props) {}
// }

// const user = new User2({
//   id: '1',
//   nome: 'binoar',
//   email: 'email'
// })

// console.log(user.nome)
