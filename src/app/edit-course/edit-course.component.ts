import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  editForm: FormGroup
  course: any={}


  constructor(private fd:FormBuilder , private  courseservice : CourseService) { }

  ngOnInit(): void {
    this.editForm=this.fd.group({
      id:[""],
      titre:[""]


    })
  }
  onEditCourse(){
    console.log(this.course);

    this.courseservice.updateCourse(this.course).subscribe(data =>console.log(data));



  }

}
