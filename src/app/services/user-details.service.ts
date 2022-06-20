import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  // TODO: Projeye Firebase ekle?.. (ng add @angular/fire)
  users: User[] = [];

  constructor() { }

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(user: User): void {
    const index = this.users.indexOf(user);

    if (index > -1) {
      this.users.splice(index, 1);
    } else console.log("Cannot find the user");
  }

  removeLastUser(): void {
    if (this.users.length !== 0) {
      this.users.pop();
    } else console.log("The user array has no elements to remove :P");
  }

  clearUsers(): void {
    this.users.splice(0, this.users.length);
  }
}
