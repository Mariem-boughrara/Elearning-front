import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Exercice } from '../exercice';
import { ExerciceService } from '../services/exercice.service';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  constructor(private exerciceService: ExerciceService){}

  public exercice: Exercice;
  public exercices: Exercice[] = [];
  public editExercice: Exercice | null | undefined ;
  public deleteExercice: Exercice | null | undefined ;

  ngOnInit() {
    this.getExercices();
  }

  public getExercices(): void {
    this.exerciceService.getExercices().subscribe(
      (response: Exercice[]) => {
        this.exercices = response;
        console.log(this.exercice);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddExercice(addForm: NgForm): void {

    document.getElementById('add-exercice-form');
    this.exerciceService.addExercice(addForm.value).subscribe(
      (response: Exercice) => {
        console.log(response);
        this.getExercices();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  onEditExercice(){
    console.log(this.exercice);

    this.exerciceService.updateExercice(this.exercice).subscribe(data =>console.log(data));



  }
  public onUpdateExercice(  c: Exercice): void {
    this.exerciceService.updateExercice(c).subscribe(
      (response: Exercice) => {
        console.log(response);
        this.getExercices();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteExercice(exerciceId: number): void {
    this.exerciceService.deleteExercice(exerciceId).subscribe(
      (response: void) => {
        console.log(response);
        this.getExercices();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchExercice(key: string): void {
    console.log(key);
    const results: Exercice[] = [];
    for (const exer of this.exercices) {
      if (exer.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       {
        results.push(exer);
      }
    }
    this.exercices = results;
    if (results.length === 0 || !key) {
      this.getExercices();
    }
  }

  public onOpenModal(exercice: Exercice | null , mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addExerciceModal');
    }
    if (mode === 'edit') {
      this.editExercice = exercice;
      button.setAttribute('data-target', '#updateExerciceModal');
    }
    if (mode === 'delete') {
      this.deleteExercice = exercice;
      button.setAttribute('data-target', '#deleteExerciceModal');
    }
    container.appendChild(button);
    button.click();
  }



}
