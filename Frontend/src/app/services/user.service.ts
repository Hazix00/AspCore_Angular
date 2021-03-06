import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  addUser(user: User): void {
    let users: User[];

    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

  findUser(email: string, password: string): User {
    let user: User;
    if (localStorage.getItem('Users')) {
      const users = JSON.parse(localStorage.getItem('Users'));
      user = users.find(
        (u: User) => u.email === email && u.password === password
      );
    }
    return user;
  }
}
