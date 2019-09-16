import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordenador } from './ordenador';
@Injectable({
  providedIn: 'root'
})
export class OrdenadorRESTService {

  constructor(public servicio:HttpClient) { 
  }
  public  buscarTodos():Observable<Ordenador[]> {

    return this.servicio.get<Ordenador[]>("http://localhost:3000/ordenadores");
  
  }
  public  buscarUno(marca:string):Observable<Ordenador> {

    return this.servicio.get<Ordenador>(`http://localhost:3000/ordenadores/${marca}`);
  
  }

  public borrar(ordenador:Ordenador) {

      return this.servicio.delete<Ordenador>(`http://localhost:3000/ordenadores/${ordenador.marca}`);
  }

  public insertar(ordenador:Ordenador) {

    return this.servicio.post<Ordenador>("http://localhost:3000/ordenadores",ordenador);
}

public salvar(ordenador:Ordenador) {

  return this.servicio.put<Ordenador>(`http://localhost:3000/ordenadores/${ordenador.marca}`,ordenador);
}
}
