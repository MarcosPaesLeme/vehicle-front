import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Vehicle } from '../models/vehicle';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  url: string = environment.url;
    
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private headerL = new HttpHeaders({
    'Authorization': `Bearer ${this.authService.getToken()}`
  });
  getVehilces(): Observable<any> {
    return this.http.get<any>(`${this.url}/vehicle`, { headers: this.headerL });
  }

  getVacanciesTest(companyId, params = {}): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/vacancies/test/${companyId}`, { headers: this.headerL });
  }

  patchStatusVehicle(vehicleId, params: {}): Observable<any> {
    return this.http.patch<any>(`${this.url}/vehicle/${vehicleId}`, params, { headers: this.headerL });
  }

  putVehicle(vehicleId, params = {}): Observable<any> {
    return this.http.put<any>(`${this.url}/vehicle/${vehicleId}`, params, { headers: this.headerL });
  }

  postVehicle(params = {}): Observable<any> {
    return this.http.post<any>(`${this.url}/vehicle`, params, { headers: this.headerL });
  }
}
