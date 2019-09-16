import { Component, OnInit } from '@angular/core';
import { Ordenador } from '../ordenador';
import { OrdenadorRESTService } from '../ordenador-rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-editar',
  templateUrl: './formulario-editar.component.html',
  styleUrls: ['./formulario-editar.component.css']
})
export class FormularioEditarComponent implements OnInit {


  ordenadorEditar:Ordenador= new Ordenador();
  
  constructor(private servicioREST:OrdenadorRESTService ,private route:ActivatedRoute,private router:Router) { 


  }

  ngOnInit() {
  

      this.route.params.subscribe((parametros) => {

        console.log(parametros);
        this.servicioREST.buscarUno(parametros.marca).subscribe((datos) => {
         
          this.ordenadorEditar = datos;
        
        })
      
    })


  }
  salvar() {

    this.servicioREST.salvar(this.ordenadorEditar).subscribe(()=>{


        this.router.navigate(["lista"]);

    })

  }


}
