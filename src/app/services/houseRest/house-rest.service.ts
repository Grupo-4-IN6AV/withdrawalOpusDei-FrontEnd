import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})

export class HouseRestService {
  httpOptios = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization': this.credentialRest.getToken(),
  });
  constructor(
    private credentialRest: CredentialsRestService,
    private http: HttpClient
  ) { }

  getHouses(){
    return this.http.get(environment.baseUrl + 'house/obtenerCasas', { headers: this.httpOptios});
  }

  getHousesPipe(){
    return this.http.get(environment.baseUrl + 'house/obtenerCasas', { headers: this.httpOptios});
  }

  getHouse(id: string){
    return this.http.get(environment.baseUrl + 'house/obtenerCasa/' + id , { headers: this.httpOptios});
  }
}
