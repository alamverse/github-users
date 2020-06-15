import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  currentUser;
  currentUserFullData;
  userSub: Subscription;
  icon: string;
  constructor(private http: HttpClient, private usersService: UsersService) {}

  ngOnInit(): void {
    this.currentUser = this.usersService.getSelectedUser();
    this.userSub = this.usersService.userSelected.subscribe((user) => {
      this.currentUser = user;
      this.loadCurrentUserFullData(this.currentUser.url);
    });
  }

  loadCurrentUserFullData(url: string) {
    this.http.get<any>(url).subscribe((d) => {
      this.currentUserFullData = d;
      this.icon = `url('${this.currentUserFullData.avatar_url}')`;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
