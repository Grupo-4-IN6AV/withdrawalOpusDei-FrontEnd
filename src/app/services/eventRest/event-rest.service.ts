import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EventRestService {
  httpOptios = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(
    private http: HttpClient
  ) {}
  getEvents(){
    return this.http.get(environment.baseUrl + 'event/obtenerEventos', {headers: this.httpOptios});
  }

}
