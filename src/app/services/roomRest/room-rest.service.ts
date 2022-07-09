import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})
export class RoomRestService {
  httpOptios = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization': this.credentialRest.getToken(),
  });

  constructor(
    private credentialRest: CredentialsRestService,
    private http: HttpClient
  ) {}

  getRooms(){
    return this.http.get(environment.baseUrl + 'room/obtenerHabitaciones', {headers: this.httpOptios});
  }

  getRoom(id: string){
    return this.http.get(environment.baseUrl + 'room/obtenerHabitacion' + id, {headers: this.httpOptios});
  }

  addRoom(params: {}){
    return this.http.post(environment.baseUrl + 'room/crearHabitacion', params, {headers: this.httpOptios});
  }

  editRoom(id: string , params: {}){
    return this.http.put(environment.baseUrl + 'room/editarHabitacion/' + id, params , {headers: this.httpOptios});
  }

  deleteRoom(id: string){
    return this.http.delete(environment.baseUrl + 'room/eliminarHabitacion/' + id, {headers: this.httpOptios});
  }

  getRoomByHouse(id: string){
    return this.http.get(environment.baseUrl + 'room/obtenerHabitacionesPorCasa' + id, {headers: this.httpOptios});
  }
}
