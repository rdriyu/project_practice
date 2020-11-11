import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User22 } from "../User22";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  user = new User22();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showValue(){
    console.log(this.user)
  }

  checkLogin(){
    if(this.user.fullName=="Admin" && this.user.password == "Admin@1234"){
      this.router.navigate(['/adminLink']);
      alert("Login Successful! Welcome Admin! Click on 'OK' ")
    }
    else{
     alert("Incorrect Username or Password! Try Again");
    }
  }

}
