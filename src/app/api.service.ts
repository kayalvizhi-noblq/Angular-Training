import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private apiUrl = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  deleteData(id:any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
  
}
