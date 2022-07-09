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

  getHousesPipe(params : {}){
    return this.http.post(environment.baseUrl + 'house/casaPipe', params, { headers: this.httpOptios});
  }

  getHouses(){
    return this.http.get(environment.baseUrl + 'house/obtenerCasas', { headers: this.httpOptios});
  }

  getHouse(id: string){
    return this.http.get(environment.baseUrl + 'house/obtenerCasa/' + id , { headers: this.httpOptios});
  }

  addHouse(params: {}){
    return this.http.post(environment.baseUrl + 'house/crearCasa', params, {headers: this.httpOptios});
  }

  editHouse(id: string , params: {}){
    return this.http.put(environment.baseUrl + 'house/editarCasa/' + id, params , {headers: this.httpOptios});
  }

  deleteHouse(id: string){
    return this.http.delete(environment.baseUrl + 'house/eliminarCasa/' + id , {headers: this.httpOptios});
  }

  getHouseByCountry(id: string){
    return this.http.get(environment.baseUrl + 'house/obtenerCasasPorPais/' + id , { headers: this.httpOptios});
  }

}
