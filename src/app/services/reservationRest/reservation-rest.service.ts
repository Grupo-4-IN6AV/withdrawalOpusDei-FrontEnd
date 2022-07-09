import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class ReservationRestService {
  httpOptios = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization': this.credentialRest.getToken(),
  });

  constructor(
    private credentialRest: CredentialsRestService,
    private http: HttpClient
  ) {}

  addReservation(params: {}){
    return this.http.post(environment.baseUrl + 'reservation/crearReservacion', params, {headers: this.httpOptios});
  }

  reservationReset(){
    return this.http.get(environment.baseUrl + 'reservation/resetearHabitaciones', {headers: this.httpOptios});
  }
}
