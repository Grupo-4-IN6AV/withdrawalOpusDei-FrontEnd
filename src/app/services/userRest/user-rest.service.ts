import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  httpOptios = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization': this.credentialRest.getToken(),
  });

  constructor(
    private credentialRest: CredentialsRestService,
    private http: HttpClient
  ) {}

  getOrganizers(){
    return this.http.get(environment.baseUrl + 'user/obtenerOrganizadores', {headers: this.httpOptios});
  }

  getOrganizer(id: string){
    return this.http.get(environment.baseUrl + 'user/obtenerOrganizador' + id, {headers: this.httpOptios});
  }

  addOrganizer(params: {}){
    return this.http.post(environment.baseUrl + 'user/crearOrganizador', params, {headers: this.httpOptios});
  }

  editOrganizer(id: string , params: {}){
    return this.http.put(environment.baseUrl + 'user/editarOrganizador/' + id, params , {headers: this.httpOptios});
  }

  deleteOrganizer(id: string){
    return this.http.delete(environment.baseUrl + 'user/eliminarOrganizador' + id, {headers: this.httpOptios});
  }

  getOrganizerByGender(){
    return this.http.get(environment.baseUrl + 'user/obtenerOrganizadoresPorGenero', {headers: this.httpOptios});
  }
}
