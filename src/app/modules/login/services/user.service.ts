import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL: string = environment.baseUrl;
  private endpoint: string = 'administrador';

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string) {
    const url = `${this.baseURL}${this.endpoint}?email=${email}`;
    return this.http.get(url);
  }
}
