import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { 
    
  }

  salvar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('https://api-servico-cliente.herokuapp.com/v1/customers', cliente);
  
  }

  getCliente() : Cliente{
    let cliente : Cliente = new Cliente();
    cliente.nome = 'Cleber';
    cliente.cpf = '8888888';
    return cliente;
    
  }
}
