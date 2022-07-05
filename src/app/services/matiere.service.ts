import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matiere } from '../matiere';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class MatiereService {
  private apiServerUrl = environment.apiBaseurl;


  constructor(private http: HttpClient){}


  public getMatieres(): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(`${this.apiServerUrl}/api/matieres/all`);
  }

  public addMatiere(matiere: Matiere): Observable<Matiere> {
    return this.http.post<Matiere>(`${this.apiServerUrl}/api/matieres/add`, matiere);
  }

  public updateMatiere( matiere: any): Observable<Matiere> {
    console.log(matiere);

    return this.http.put<Matiere>(`${this.apiServerUrl}/api/Matieres/update/${matiere.id}`, matiere);
  }

  public deleteMatiere(matiereId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/Matieres/delete/${matiereId}`);
  }

}
