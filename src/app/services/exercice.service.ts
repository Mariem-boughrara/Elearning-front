import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Exercice } from '../exercice';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {

  private apiServerUrl = environment.apiBaseurl;


  constructor(private http: HttpClient){}


  public getExercices(): Observable<Exercice[]> {
    return this.http.get<Exercice[]>(`${this.apiServerUrl}/api/exercices/all`);
  }

  public addExercice(exercice: Exercice): Observable<Exercice> {
    return this.http.post<Exercice>(`${this.apiServerUrl}/api/exercices/add`, exercice);
  }

  public updateExercice( exercice: any): Observable<Exercice> {
    console.log(exercice);

    return this.http.put<Exercice>(`${this.apiServerUrl}/api/exercices/update/${exercice.id}`, exercice);
  }

  public deleteExercice(exerciceId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/exercices/delete/${exerciceId}`);
  }

}
