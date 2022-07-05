import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elearning';
  constructor (private router : Router
    ) {}

ngOnInit () {

/*  let isloggedin: string;
  let loggedUser:string;
  isloggedin = localStorage.getItem('isloggedIn');
  loggedUser = localStorage.getItem('loggedUser');
  if (isloggedin!="true" || !loggedUser)
      this.router.navigate(['/login']);
  else
   this.authService.setLoggedUserFromLocalStorage(loggedUser);*/
}
OnclickEnseignant(){
  this.router.navigate(['/enseignant']);
}



}
