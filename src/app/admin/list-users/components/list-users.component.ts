import { AddUser } from './../../../core/models/add-user.interface';
import { ProfileUser } from './../../../core/models/user.interface';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/Users.Service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  usersFakes: AddUser[];
  users: ProfileUser[];
  loading: boolean = false;

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getFakeUsers().subscribe((data) => {
      this.usersFakes = data;
    });
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    });
    this.load();
  }

  async deleteUser(user: AddUser) {
    const response = await this.usersService.deleteFakeUsers(user);
    console.log(response);
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
