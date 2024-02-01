import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseApiUrl = 'https://localhost:7058/'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseApiUrl + 'api/users');
  }

  addUser(newUser: User): Observable<User>{
    newUser.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<User>(this.baseApiUrl + 'api/users', newUser);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.baseApiUrl + 'api/users/' + id);
  }

  updateUser(id: string, updatedUser: User): Observable<User> {
    return this.http.put<User>(this.baseApiUrl + 'api/users/' + id, updatedUser);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(this.baseApiUrl + 'api/users/' + id);
  }
}
