import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  addUser(formObj:any){
    console.log(formObj)
    this.userService.createUser(formObj).subscribe((Response)=>{
      console.log("User has been added")
    })
  }
}
