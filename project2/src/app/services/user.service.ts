import { Injectable } from '@angular/core';

class User {
  constructor(public username: string, public password: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users:User[]=[
    new User('riddhi','12345'),
    new User('abcd','12345'),
    new User('anshika','12345'),
    new User('paras','12345'),
    new User('yashika','12345'),
  ]
}
