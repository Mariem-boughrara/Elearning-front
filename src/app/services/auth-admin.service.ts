import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  public loggedUser:string;
  public isloggedIn: Boolean = false;
  public role: string;
  apiURL: string = 'http://localhost:8083/api/users';
  http : HttpClient;
  constructor(private router: Router) { }

  authenticate(email, pass) {
    if (email === "BOUTEAM@gmail.com" && pass === "123") {
      sessionStorage.setItem('email', email)
      return true;
    } else {
      alert("wrong information");

      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
  }
}


