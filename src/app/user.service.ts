import { Status } from './status';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User22 } from "./User22";
import { Login } from "./login";
import { Observable } from 'rxjs';
import { LoginStatus } from "./login-status";
import { Forget } from './Forget';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  register(user :User22) : Observable<Status> {
    let url = 'http://localhost:8080/register';
    return this.http.post<Status>(url, user);
  }

  
  login(login: Login) : Observable<LoginStatus>  {
    let url = 'http://localhost:8080/login';
    return this.http.post<LoginStatus>(url, login);
  }

  forgetuser(forget: Forget) : Observable<Status> {
    let url =" http://localhost:8080/forgot_password";
    return this.http.post<Status>(url, forget);
  }

}