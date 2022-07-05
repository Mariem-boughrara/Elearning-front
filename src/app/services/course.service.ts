import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiServerUrl = environment.apiBaseurl;


  constructor(private http: HttpClient){}


  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiServerUrl}/api/cours/all`);
  }

  public addCourse(cour: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiServerUrl}/api/cours/add`, cour);
  }

  public updateCourse( cour: any): Observable<Course> {
    console.log(cour);

    return this.http.put<Course>(`${this.apiServerUrl}/api/cours/update/${cour.id}`, cour);
  }

  public deleteCourse(courId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/cours/delete/${courId}`);
  }

}
