import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  
  
  constructor() { 
    this.cliente = new Cliente(1,"","", "");
  }

  ngOnInit(): void {

  }

}
