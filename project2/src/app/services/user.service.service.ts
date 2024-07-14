import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  users:User[]=[
    new User('riddhi','12345'),
    new User('abcd','12345'),
    new User('anshika','12345'),
    new User('paras','12345'),
    new User('yashika','12345'),
  ]
}
