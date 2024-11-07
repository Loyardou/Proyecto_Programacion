import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';

import { CardJuguetesComponent } from './components/card-juguetes/card-juguetes.component';
import { JuguetesComponent } from './pages/juguetes/juguetes.component';
import { CardComponent } from '../inicio/components/card/card.component';
import { CardGeneralComponent } from './card-general/card-general.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductoComponent,
    ContactoComponent,
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
    UbicacionComponent,
    FormsModule,
    ReactiveFormsModule,
    CardJuguetesComponent,
    
  ]
})
export class ProductoModule { }
