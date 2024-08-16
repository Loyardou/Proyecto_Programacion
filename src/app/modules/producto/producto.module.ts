import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AdopcionComponent } from './pages/adopcion/adopcion.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';

import { CardJuguetesComponent } from './components/card-juguetes/card-juguetes.component';
import { JuguetesComponent } from './pages/juguetes/juguetes.component';
import { CardComponent } from '../inicio/components/card/card.component';
import { CardGeneralComponent } from './card-general/card-general.component';



@NgModule({
  declarations: [
    ProductoComponent,
    ContactoComponent,
    AdopcionComponent,
    UbicacionComponent,

    CardJuguetesComponent,
    JuguetesComponent,
    CardGeneralComponent,
    
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

    CardJuguetesComponent,
    
  ]
})
export class ProductoModule { }
