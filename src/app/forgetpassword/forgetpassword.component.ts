import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Forget } from "../Forget";
import { UserService } from "../user.service";

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {

  forget : Forget =new Forget();
  message: string;


  constructor(private forgetService : UserService,private router :Router) { }

  forgetPassword() {
    this.forgetService.forgetuser(this.forget).subscribe(data => {
      if(data.status=="SUCCESS"){
        alert('Password Sent To Registered Email. Click OK to Login Again');
        this.router.navigate(['userLink']);
      }
      else{
        alert("Invalid Email Or Phone Number");
      }

    })
  }

}
