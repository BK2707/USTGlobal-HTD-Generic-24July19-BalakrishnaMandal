import { Pipe, PipeTransform } from '@angular/core';
import { User } from './users/user';

@Pipe({
  name: 'reduce'
})
export class ReducePipe implements PipeTransform {

/*   transform(value: string,length: number): any {
    if(value.length <= length){
      return value;
    }else{
      return value.substr(0,length)+ '...';
    }
    
  }
 */
  transform(users:User[] , searchValue : string): User[]
  {
    if( searchValue===undefined){
      return users;
    }else{
      return users.filter(data =>{
        return data.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    }
  }
}
