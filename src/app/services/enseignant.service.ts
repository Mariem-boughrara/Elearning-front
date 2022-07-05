import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enseignant } from '../enseignant';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EnseignantService {
  private apiServerUrl = environment.apiBaseurl;

  constructor(private http: HttpClient){}

  public getEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(`${this.apiServerUrl}/api/enseignants/all`);
  }

  public addEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(`${this.apiServerUrl}/api/enseignants/add`, enseignant);
  }

  public updateEnseignant( enseignant: Enseignant): Observable<Enseignant> {
    return this.http.put<Enseignant>(`${this.apiServerUrl}/api/enseignants/update`, enseignant);
  }

  public deleteEnseignant(enseignantId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/enseignants/delete/${enseignantId}`);
  }
}
