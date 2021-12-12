import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL : string = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: Usuario) : Observable<any> {

    return this.http.post<Usuario>(`${this.apiURL}/v1/users`, usuario);

  }
}
