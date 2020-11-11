import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User22 } from "../User22";
import { Login } from "../login";
import { UserService } from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login();
  message: string;

  constructor(private loginService: UserService, private router: Router) { }

  loginUser() {
   // alert(JSON.stringify(this.login));
    this.loginService.login(this.login).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
      /*  let customerId = data.customerId;
        let customerName = data.name;
        //let obj = {id : customerId, name : customerName};
        sessionStorage.setItem('customerId', String(customerId));
        sessionStorage.setItem('customerName', customerName);*/
        alert('Login Succesfull !');
        this.router.navigate(['subjectLink']);
      }
      else {
        //this.message = data.message;
        alert("Incorrect Email Or Password! Try Again");
      }
    })
  }




  /*
  user = new User22();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showValue(){
    console.log(this.user)
  }

  checkLogin(){
    if(this.user.fullName=="Sayantan" && this.user.password == "Lti@1234"){
      this.router.navigate(['/subjectLink']);
    }
    else{
      //this.router.navigate(['/failLink']);
      alert("Incorrect Username or Password! Try Again");
    }
  }
*/

}
