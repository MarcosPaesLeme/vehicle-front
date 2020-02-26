import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = environment.url;
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(params = {}): Observable<any> {
    return this.http.post<any>(`${this.url}/user/authenticate`, params);
  }

  register(params = {}): Observable<any> {
    return this.http.post<any>(`${this.url}/user/register`, params);
  }

  isAuthenticated(): Boolean {
    const token = this.getToken();
    return Boolean(token);
  }

  getToken() {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      return token;
    }
  }

  logOff() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  getUser() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return user;
    }
  }
}
