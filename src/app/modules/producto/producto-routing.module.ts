import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdopcionComponent } from './pages/adopcion/adopcion.component';

const routes: Routes = [
  {
    path: "adopcion", component:AdopcionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
