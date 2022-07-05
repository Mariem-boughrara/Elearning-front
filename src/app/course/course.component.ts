import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public cour: Course;
  public cours: Course[] = [];
  public editCourse: Course | null | undefined ;
  public deleteCourse: Course | null | undefined ;


  constructor(private coursService: CourseService){}

  ngOnInit() {
    this.getCourses();
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


  public onAddCourse(addForm: NgForm): void {

    document.getElementById('add-course-form');
    this.coursService.addCourse(addForm.value).subscribe(
      (response: Course) => {
        console.log(response);
        this.getCourses();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  onEditCourse(){
    console.log(this.cour);

    this.coursService.updateCourse(this.cour).subscribe(data =>console.log(data));



  }
  public onUpdateCourse(  c: Course): void {
    this.coursService.updateCourse(c).subscribe(
      (response: Course) => {
        console.log(response);
        this.getCourses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCourse(coursId: number): void {
    this.coursService.deleteCourse(coursId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCourses();
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

  public onOpenModal(cour: Course | null , mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCourseModal');
    }
    if (mode === 'edit') {
      this.editCourse = cour;
      button.setAttribute('data-target', '#updateCourseModal');
    }
    if (mode === 'delete') {
      this.deleteCourse = cour;
      button.setAttribute('data-target', '#deleteCourseModal');
    }
    container.appendChild(button);
    button.click();
  }



}
