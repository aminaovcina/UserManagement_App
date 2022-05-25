import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import API_PATHS from '../api';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  private BASE_URL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  GetPermissions(): Observable<{}> {
    return this.http.get(
      this.BASE_URL + API_PATHS.permissionController,
      httpOptions
    );
  }
}
