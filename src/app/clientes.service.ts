import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente() : Cliente{
    let cliente : Cliente = new Cliente();
    cliente.nome = 'Cleber';
    cliente.cpf = '8888888';
    return cliente;
    
  }
}
