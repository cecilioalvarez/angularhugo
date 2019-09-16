import { Component, OnInit } from '@angular/core';
import { Ordenador } from '../ordenador';
import { ActivatedRoute } from '@angular/router';
import { OrdenadorRESTService } from '../ordenador-rest.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  detalleOrdenador: Ordenador = new Ordenador();

  constructor(private route: ActivatedRoute, private servicioREST: OrdenadorRESTService) {
  }

  ngOnInit() {

    this.route.params.subscribe((parametros) => {
      this.servicioREST.buscarUno(parametros.marca).subscribe((datos) => {
        this.detalleOrdenador = datos;
      });
    });


  }

}
