import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList:User[] = null;

  constructor(private usersService : UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users:User[])=>{
      console.log(users);
      if (users[0]){
        this.usersList = users;
      }
      
    })
  }

}
