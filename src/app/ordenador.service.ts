import { Injectable } from '@angular/core';
import { Ordenador } from './ordenador';

@Injectable({
  providedIn: 'root'
})
export class OrdenadorService {
  
  listaOrdenador: Ordenador[]=[];

  constructor() {

    this.listaOrdenador.push(new Ordenador("ibm","z1",1000));
    this.listaOrdenador.push(new Ordenador("acer","a1",500));
    this.listaOrdenador.push(new Ordenador("hp","h1",700));
   }

   public buscarTodos():Ordenador[] {

    return this.listaOrdenador;
   }

   public borrar(ordenador:Ordenador):void{

    let indice:number=this.listaOrdenador.indexOf(ordenador);
    this.listaOrdenador.splice(indice,1);

   }

   public insertar(ordenador:Ordenador) {

    this.listaOrdenador.push(ordenador);
   }
}
