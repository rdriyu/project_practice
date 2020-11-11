import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User22 } from '../User22';


export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  /*styleUrls: ['./register.component.css']*/
  styles: [`
      .error {​​​​​ color: crimson; }​​​​​
      .success {​​​​​ color: green; }​​​​​
      .container{​​​​​
        padding: 16px;
        width: 300px;
        margin: auto;
      }​​​​​
  `],
})
export class RegisterComponent {

   user= new User22;
  abc :string = null;
  public formModel:FormModel={};
  constructor(private UserService: UserService,private router : Router) { }
  register() {
    this.UserService.register(this.user).subscribe(data=>{
      if(data.status=='SUCCESS') {
        alert("User Added Successfully. Procced To Login !");
        this.router.navigate(['userLink']);
      }
      else{
        alert("Failed To Add User");
      }
    })
  }
  
}



