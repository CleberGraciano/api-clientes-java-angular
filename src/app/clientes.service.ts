import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiURL}/v1/customers`, cliente);
  
  }

  atualizar(cliente: Cliente): Observable<any>{
    return this.http.put<Cliente>(`${this.apiURL}/v1/customers/${cliente.id}`, cliente);
  
  }

  getClientes() : Observable<Cliente[]>{
     
    return this.http.get<Cliente[]>(`${this.apiURL}/v1/customers`);
    
  }

  getClienteById(id: number): Observable<Cliente>{
  
    return this.http.get<any>(`${this.apiURL}/v1/customers/${id}`);

  }

  deletar(cliente: Cliente): Observable<any>{
  
    return this.http.delete<any>(`${this.apiURL}/v1/customers/${cliente.id}`);

  }



}
