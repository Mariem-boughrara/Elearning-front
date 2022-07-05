import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-cours-etudiant',
  templateUrl: './cours-etudiant.component.html',
  styleUrls: ['./cours-etudiant.component.css']
})
export class CoursEtudiantComponent implements OnInit {
  public cours: Course[] = [];
  constructor(private coursService :CourseService) { }

  ngOnInit(): void {
    this.getCourses()
  }

  public getCourses(): void {
    this.coursService.getCourses().subscribe(
      (response: Course[]) => {
        this.cours = response;
        console.log(this.cours);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public searchCourse(key: string): void {
    console.log(key);
    const results: Course[] = [];
    for (const cour of this.cours) {
      if (cour.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       {
        results.push(cour);
      }
    }
    this.cours = results;
    if (results.length === 0 || !key) {
      this.getCourses();
    }
  }


}
