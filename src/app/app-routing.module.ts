import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { ProductoModule } from './modules/producto/producto.module';
import { AdopcionComponent } from './modules/producto/pages/adopcion/adopcion.component';
import { UbicacionComponent } from './modules/producto/pages/ubicacion/ubicacion.component';
import { ContactoComponent } from './modules/producto/pages/contacto/contacto.component';


//Son las encargadas de tener todas las rutas de la pagina
const routes: Routes = [{
  path:"",component:InicioComponent
},
// carga perezosa -> 1 modulo
//loadChildren : indica una ruta hija
//()=>import: ruta de donde viene el modulo
// .then: promesa/ funcion asincronica
{
  path:"inicio",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
},
{
path:"Producto",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
},
{
  path:"Adopcion",loadChildren:()=>import('./modules/producto/pages/adopcion/adopcion.component').then(m=>m.AdopcionComponent)
},
{
  path:"Ubicacion",loadChildren:()=>import('./modules/producto/pages/ubicacion/ubicacion.component').then(m=>m.UbicacionComponent),
},
{
  path:"Contacto",loadChildren:()=>import('./modules/producto/pages/contacto/contacto.component').then(m=>m.ContactoComponent),
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
