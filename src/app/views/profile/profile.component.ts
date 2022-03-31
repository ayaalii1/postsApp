import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userInterface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UsersService) { }
  allUsers:Users[] = []
  getUsers(){
    this.allUsers = this.userService.getUsers()
  }

  ngOnInit(): void {
    this.getUsers()
  }

}
