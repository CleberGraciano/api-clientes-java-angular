import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../clientes.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success : boolean = false;
  errors: String[] = [];
  id: number = 0;
  
  
  constructor(private service: ClientesService, private router: Router, private activatedRoute:ActivatedRoute) { 

    this.cliente = new Cliente();

    
  }


  ngOnInit() {
    
   let params = this.activatedRoute.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       if(this.id){
        this.service
        .getClienteById(this.id)
        .subscribe(response=> this.cliente = response,
          errorResponse => this.cliente = new Cliente()
          )
       }
       
     });

    }


  voltarParaListagem(){
    this.router.navigate(['/clientes-lista']);


  }

  onSubmit(){

    if(this.id){
      this.service
      .atualizar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = [];
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o cliente.']
      
      })


    }else {

    this.service.salvar(this.cliente).subscribe(response => {
      this.success = true;
      this.errors = [];
      this.cliente = response;
    }, (errorResponse) =>{
      this.success = false;
      this.errors = errorResponse.error.errors;
      
    }
 
    )
  }
  }




}
