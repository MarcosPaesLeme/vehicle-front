import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = environment.url;
  constructor(
    private http: HttpClient
  ) { }

  patchVacancy(vacancyId, params = {}): Observable<any> {
    return this.http.patch<any>(`${this.url}/vacancies/${vacancyId}`, params);
  }

  getVacanciesTest(companyId, params = {}): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/vacancies/test/${companyId}`);
  }


}
