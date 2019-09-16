import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaOrdenadorComponent } from './lista-ordenador/lista-ordenador.component';
import { FormularioNuevoComponent } from './formulario-nuevo/formulario-nuevo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioEditarComponent } from './formulario-editar/formulario-editar.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [

  { path: 'lista', component: ListaOrdenadorComponent },
  { path: 'formularioNuevo', component: FormularioNuevoComponent },
  { path: 'detalle/:marca', component: DetalleComponent },
  { path: 'formularioEditar/:marca', component: FormularioEditarComponent },
  {path:"", redirectTo:"/lista",pathMatch:"full"},
  {path:"error", component:ErrorComponent},
  {path:"**",redirectTo:"/error", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
