import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as jwtdecode from 'jwt-decode';
import { UserLogin } from '../Models/user-login.model';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  r: { isAdmin: boolean, isCustomer: boolean, name: string, UserId: number } = { isAdmin: true, isCustomer: true, name: "", UserId: 0 };
  isAuthenticated=false;
  baseurl='http://localhost:5018/api/Account/login';
  router: any;

  constructor(public http: HttpClient) { }

  login(user: UserLogin) {
    this.http.post(this.baseurl,user,{responseType:'text'}).subscribe(d=>{
      this.isAuthenticated=true;
      this.router.navigateByUrl("/home")
      localStorage.setItem("token",d);
      this.r=jwtdecode.jwtDecode(d);
      console.log(this.r.isAdmin);
      console.log(this.r.isCustomer);
      console.log(this.r.name);
      console.log(this.r.UserId);

    })
  }

    logout() :void{

        this.isAuthenticated=false;
        localStorage.removeItem("token");

    }

}

