import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AdopcionComponent } from './pages/adopcion/adopcion.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';

@NgModule({
  declarations: [
    ProductoComponent,
    ContactoComponent,
    AdopcionComponent,
    UbicacionComponent,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoComponent,
    ContactoComponent,
    AdopcionComponent,
    UbicacionComponent,
  ]
})
export class ProductoModule { }
