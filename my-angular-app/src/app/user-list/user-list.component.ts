import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Array to store the list of users

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Fetch the list of users from the API
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}