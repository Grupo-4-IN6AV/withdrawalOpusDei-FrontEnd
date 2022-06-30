import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsRestService {

  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(params: {}) {
    let body = JSON.stringify(params);
    return this.http.post(environment.baseUrl + 'contact/sendMessage', body, { headers: this.httpOptions });
  }
}
