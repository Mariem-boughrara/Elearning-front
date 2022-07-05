import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class UserService {
  private apiServerUrl = environment.apiBaseurl;


  constructor(private http: HttpClient){}


  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/api/users/all`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/api/users/add`, user);
  }

  public updateUser( user: any): Observable<User> {
    console.log(user);

    return this.http.put<User>(`${this.apiServerUrl}/api/users/update/${user.id}`, user);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/users/delete/${userId}`);
  }

}
