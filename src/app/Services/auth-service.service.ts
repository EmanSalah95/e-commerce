import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;

  constructor() {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(
      this.checkToken()
    );
  }

  login(username: string, password: string) {
    localStorage.setItem('token', 'hgcsgchdgchj');
    localStorage.setItem('userName', username);
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
