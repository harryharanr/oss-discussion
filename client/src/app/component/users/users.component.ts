import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

 users;

 getUsers(){
    this.userService.getUsers().subscribe(data => {
    this.users = data.message;
    console.log(this.users);
   })
 }

  ngOnInit() {
    this.getUsers();
  }

}
