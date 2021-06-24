import { Component, OnInit } from '@angular/core';
//import { getMaxListeners } from 'process';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  htmlToAdd: string ="";

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  email:string ="";
  password:string ="";
  
  loginUser(){
    if(this.email== "admin@gmail.com" && this.password == "admin"){
      this.htmlToAdd = '<a routerLink="/adminMenu"></a>';
      this.route.navigate(['/adminMenu']);
    }
    else{
      alert("check details again")
    }
  }
}
