import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})

export class EventRestService {
  httpOptios = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization': this.credentialRest.getToken(),
  });

  constructor(
    private credentialRest: CredentialsRestService,
    private http: HttpClient
  ) {}

  getEvents(){
    return this.http.get(environment.baseUrl + 'event/obtenerEventos', {headers: this.httpOptios});
  }

  getEvent(id: string){
    return this.http.get(environment.baseUrl + 'event/obtenerEvento' + id, {headers: this.httpOptios});
  }

  addEvent(params: {}){
    return this.http.post(environment.baseUrl + 'event/crearEvento', params, {headers: this.httpOptios});
  }

  editEvent(id: string , params: {}){
    return this.http.put(environment.baseUrl + 'event/editarEvento/' + id, params , {headers: this.httpOptios});
  }

  deleteEvent(id: string){
    return this.http.delete(environment.baseUrl + 'event/eliminarEvento/' + id , {headers: this.httpOptios});
  }

  eventByHouse(id: string){
    return this.http.get(environment.baseUrl + 'event/obtenerEventosPorCasa/' + id , {headers: this.httpOptios});
  }

}
