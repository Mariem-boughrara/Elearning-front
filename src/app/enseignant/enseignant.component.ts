import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import {Enseignant} from '../enseignant'
@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {


  constructor( private router : Router){}


  ngOnInit() {
  }

  OnClickCours() {
    this.router.navigate(['courses']);
  }
  OnClickExercice() {
    this.router.navigate(['exercices']);
  }

}
