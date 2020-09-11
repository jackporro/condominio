import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitasComponent } from './component/visitas/visitas.component';
import { PropietariosComponent } from './component/propietarios/propietarios.component';


const routes: Routes = [
  { path: 'visitas', component : VisitasComponent},
  { path: 'propietarios', component : PropietariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
