import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { AnimesComponent } from './pages/animes/animes.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { GenerosComponent } from './pages/generos/generos.component';


@NgModule({
  declarations: [
    ProductoComponent,
    AnimesComponent,
    IndumentariaComponent,
    GenerosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
