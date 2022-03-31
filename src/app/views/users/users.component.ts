import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userInterface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  constructor(private userService:UsersService) { }

  // users:Users[] = [
  //   {name:'Ali',age:30},
  //   {name:'Osama',age:35},
  //   {name:'Zain',age:20},
  // ]

 users:Users[] = []
  getData(){
    this.users = this.userService.getUsers()
    console.log(this.users)
  }

  ngOnInit(): void {
  this.getData()
  }

}
