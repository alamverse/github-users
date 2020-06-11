import { Injectable } from '@angular/core';
import { User } from './users.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userSelected = new Subject<User>();
  selectedUser: User;
  constructor() { }

  setSelectedUser(user: User) {
    this.selectedUser = user;
    this.userSelected.next(this.selectedUser);
  }

  getSelectedUser() {
    return this.selectedUser;
  }
}
