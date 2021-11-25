import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('https://api-servico-cliente.herokuapp.com/v1/customers', cliente);
  
  }

  atualizar(cliente: Cliente): Observable<any>{
    return this.http.put<Cliente>(`https://api-servico-cliente.herokuapp.com/v1/customers/${cliente.id}`, cliente);
  
  }

  getClientes() : Observable<Cliente[]>{
     
    return this.http.get<Cliente[]>('https://api-servico-cliente.herokuapp.com/v1/customers');
    
  }

  getClienteById(id: number): Observable<Cliente>{
  
    return this.http.get<any>(`https://api-servico-cliente.herokuapp.com/v1/customers/${id}`);

  }

  deletar(cliente: Cliente): Observable<any>{
  
    return this.http.delete<any>(`https://api-servico-cliente.herokuapp.com/v1/customers/${cliente.id}`);

  }



}
