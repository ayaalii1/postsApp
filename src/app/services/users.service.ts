import { Injectable } from '@angular/core';
import { Users } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // ng g s services/nameofservice
  // app.module --> providers call service
  // inside service logic (httprequests)
  // ts component inside constructor inject service private variable:Service
  constructor() { }
  allUsers:Users[] = [
    {name:'Ali',age:30},
    {name:'Osama',age:35},
    {name:'Zain',age:20},
  ]

  getUsers(){
    return this.allUsers
  }
}
