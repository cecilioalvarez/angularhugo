import { Component, OnInit } from '@angular/core';
import { Ordenador } from '../ordenador';
import { OrdenadorService } from '../ordenador.service';
import { OrdenadorRESTService } from '../ordenador-rest.service';
import { flatMap } from "rxjs/operators";
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-ordenador',
  templateUrl: './lista-ordenador.component.html',
  styleUrls: ['./lista-ordenador.component.css']
})
export class ListaOrdenadorComponent implements OnInit {

  _listaOrdenador: Ordenador[];
  filtroModelo: string = "";

  constructor(private servicioREST: OrdenadorRESTService, private router: Router) {
  }



  get listaOrdenador(): Ordenador[] {

    if (this.filtroModelo == "") {

      return this._listaOrdenador;
    } else {

      return this.listaOrdenador.filter((item) => {

        return item.modelo.startsWith(this.filtroModelo);
      });

    }


  }
  set listaOrdenador(value: Ordenador[]) {
    this._listaOrdenador = value;
  }


  ngOnInit() {

    this.servicioREST.buscarTodos().subscribe((datos) => {

      this.listaOrdenador = datos;

    })

  }
  /*
  insertar() {

    this.servicioREST.insertar(this.nuevoOrdenador).subscribe((datos) => {

      this.listaOrdenador.push(datos);

    });
  }

  /*
  borrar(ordenador: Ordenador): void {



    this.servicioREST.borrar(ordenador).subscribe((datos)=>{

      // busca el item que recibo de la peticion REST
      // es decir el que he borrado en el servidor

      //filtro la lista de cliente y me quedo con el
      let seleccionado=this.listaOrdenador.filter((item)=>{

          return item.marca==datos.marca;
      })[0];

      //una vez que me he quedado con el localizo su posicion
      let indice= this.listaOrdenador.indexOf(seleccionado);

      //borro la posicion del array
      this.listaOrdenador.splice(indice,1);
    })
  }
*/

  borrar(ordenador: Ordenador): void {



    this.servicioREST.borrar(ordenador).pipe(flatMap(e => this.servicioREST.buscarTodos()))
      .subscribe(datos => {
        this.listaOrdenador = datos;
      }, error => console.log("ha ocurrido un error horrible"));

  }


  editar(ordenador: Ordenador) {

    // a nivel del enrutador
    console.log(ordenador);
    this.router.navigate(['formularioEditar', ordenador.marca]);
  }


  detalle(ordenador: Ordenador) {


    this.router.navigate(['detalle', ordenador.marca]);
  }

}








/*
  constructor(private servicio: OrdenadorService) {

  }
  ngOnInit() {
    this.listaOrdenador = this.servicio.buscarTodos();
  }
  borrar(ordenador: Ordenador): void {
    this.servicio.borrar(ordenador);
  }

  insertar() {

    this.servicio.insertar(this.nuevoOrdenador);
    this.nuevoOrdenador=new Ordenador();
  }
  */