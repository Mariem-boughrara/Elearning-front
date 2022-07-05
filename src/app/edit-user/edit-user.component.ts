import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user:any={}
  editForm: FormGroup

  constructor(private fd:FormBuilder , private  userservice : UserService) { }

  ngOnInit(): void {
    this.editForm=this.fd.group({
      id:[""],
      nom:[""],
      prenom:[""],
       email:[""],
        pass:[""]

    })

  }
  onEditUser(){
    console.log(this.user);

    this.userservice.updateUser(this.user).subscribe(data =>console.log(data));



  }

}
