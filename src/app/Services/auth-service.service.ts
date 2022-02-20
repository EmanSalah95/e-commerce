import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from './../Models/iuser';
import { environment } from './../../environments/environment';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  httpOptions ;

  constructor(private httpC: HttpClient , private _userService:UserService) {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(
      this.checkToken()
    );

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'applsication/json'
        ,Authorization: 'my-auth-token'
      })
    };
  }

  addUser(obj:IUser): Observable<IUser> {
    return this.httpC.post<IUser>(`${environment.API}/users`,JSON.stringify(obj) , this.httpOptions);
  }

  getUsers(condition=''): Observable<IUser[]> {
    return this.httpC.get<IUser[]>(`${environment.API}/users${condition}`);
  }

  login(username: string, password: string) {
    localStorage.setItem('token', 'hgcsgchdgchj');
    localStorage.setItem('userName', username);
    this._userService.login(username);
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
  }

  checkToken(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getAuthenticatedState(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}
