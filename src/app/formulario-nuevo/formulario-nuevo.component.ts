import { Component, OnInit } from '@angular/core';
import { Ordenador } from '../ordenador';
import { OrdenadorRESTService } from '../ordenador-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-nuevo',
  templateUrl: './formulario-nuevo.component.html',
  styleUrls: ['./formulario-nuevo.component.css']
})
export class FormularioNuevoComponent implements OnInit {

  nuevoOrdenador: Ordenador = new Ordenador();
  
  constructor(private servicioREST:OrdenadorRESTService,private router:Router) { 



  }


  insertar() {

    this.servicioREST.insertar(this.nuevoOrdenador).subscribe((datos) => {

        this.router.navigate(["/lista"]);

    });
  }


  ngOnInit() {
  }

}
