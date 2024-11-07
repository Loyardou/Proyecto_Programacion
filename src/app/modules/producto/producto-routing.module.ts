import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  
  {
    path : "producto", component:ProductoComponent
  },
  {
    path : "ubicacion", component:UbicacionComponent
  },
  {
    path : "contacto", component:ContactoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
