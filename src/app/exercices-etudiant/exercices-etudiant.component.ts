import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Exercice } from '../exercice';
import { ExerciceService } from '../services/exercice.service';

@Component({
  selector: 'app-exercices-etudiant',
  templateUrl: './exercices-etudiant.component.html',
  styleUrls: ['./exercices-etudiant.component.css']
})
export class ExercicesEtudiantComponent implements OnInit {

  public exercices: Exercice[] = [];
  constructor(private exerciceService:ExerciceService) { }

  ngOnInit(): void {
    this.getExercices()
  }

  public getExercices(): void {
    this.exerciceService.getExercices().subscribe(
      (response: Exercice[]) => {
        this.exercices = response;
        console.log(this.exercices);
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


}
