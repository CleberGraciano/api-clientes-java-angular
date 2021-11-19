import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { 
    
  }

  getCliente() : Cliente{
    let cliente : Cliente = new Cliente();
    cliente.nome = 'Cleber';
    cliente.cpf = '8888888';
    return cliente;
    
  }
}
