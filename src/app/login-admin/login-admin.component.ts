import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from '../services/auth-admin.service';
import { User } from '../user';

@Component({
  selector: 'app-login-admin',
  templateUrl:'./login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  email = 'BOUTEAM@gmail.com'
  pass = '123'
  invalidLogin = false

  constructor(private router: Router,
    public loginservice: AuthAdminService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.email, this.pass)
    ) {
      this.router.navigate(["users"])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}



