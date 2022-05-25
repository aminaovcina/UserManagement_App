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
export class UserService {
  private BASE_URL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  GetUsers(config: any): Observable<{}> {
    return this.http.post(
      this.BASE_URL + API_PATHS.userController_list,
      config,
      httpOptions
    );
  }

  GetUserPermissions(id: number): Observable<{}> {
    return this.http.get(
      this.BASE_URL + API_PATHS.userPermissionController_id(id),
      httpOptions
    );
  }

  AssignUserPermissions(model: any): Observable<{}> {
    return this.http.post(
      this.BASE_URL + API_PATHS.userController_assignUserPermissions,
      model,
      httpOptions
    );
  }

  CreateUser(model: any): Observable<{}> {
    return this.http.post(
      this.BASE_URL + API_PATHS.userController,
      model,
      httpOptions
    );
  }

  UpdateUser(model: any): Observable<{}> {
    const id = model.userId;
    return this.http.post(
      this.BASE_URL + API_PATHS.userController_id(id),
      model,
      httpOptions
    );
  }

  GetUser(id: number): Observable<{}> {
    return this.http.get(
      this.BASE_URL + API_PATHS.userController_id(id),
      httpOptions
    );
  }

  DeleteUser(id: number): Observable<{}> {
    return this.http.delete(
      this.BASE_URL + API_PATHS.userController_id(id),
      httpOptions
    );
  }
}
