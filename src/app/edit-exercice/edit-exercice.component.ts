import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ExerciceService } from '../services/exercice.service';

@Component({
  selector: 'app-edit-exercice',
  templateUrl: './edit-exercice.component.html',
  styleUrls: ['./edit-exercice.component.css']
})
export class EditExerciceComponent implements OnInit {
  editForm: FormGroup
  exercice: any={}


  constructor(private fd:FormBuilder , private  exerciceservice : ExerciceService) { }

  ngOnInit(): void {
    this.editForm=this.fd.group({
      id:[""],
      titre:[""]


    })
  }
  onEditExercice(){

    this.exerciceservice.updateExercice(this.exercice).subscribe(data =>console.log(data));



  }

}
