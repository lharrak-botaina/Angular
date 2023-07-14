import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getUsers(){
    const users = [
      {"id":1,"name":"botaina"},
      {"id":2,"name":"lharrak"}
    ]
    return users;
  }
}
