import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any; // Variable to store user data

  constructor(
    private route: ActivatedRoute, // Inject ActivatedRoute to access route parameters
    private userService: UserService // Inject UserService to fetch user data
  ) {}

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id !== null) {
      // Fetch user data from the API using the UserService
      this.userService.getUserById(+id).subscribe(user => {
        this.user = user; // Assign the fetched user data to the 'user' variable
      });
    } else {
      console.error('User ID is null'); // Handle the case where 'id' is null
    }
  }
}