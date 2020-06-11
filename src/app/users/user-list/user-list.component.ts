import { Component, OnInit } from '@angular/core';
import { User } from '../users.model';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(private http: HttpClient, private usersService: UsersService) { }

  ngOnInit(): void {
    this.http.get<User[]>('https://api.github.com/users').subscribe(users => {
      this.users = users;
    });
  }

  onUserSelected(user: User) {
    this.usersService.setSelectedUser(user);
  }

}
