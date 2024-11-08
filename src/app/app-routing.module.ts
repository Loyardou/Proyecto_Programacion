import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { rutaProtegidaGuard } from './guards/ruta-protegida.guard';



//Son las encargadas de tener todas las rutas de la pagina
const routes: Routes = [{
  path: "", component: InicioComponent
},

// carga perezosa -> 1 modulo
//loadChildren : indica una ruta hija
//()=>import: ruta de donde viene el modulo
// .then: promesa/ funcion asincronica
{
  path: "", loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
},
{
  path: "", loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule)
},
{
  path: "", loadChildren: () => import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule),
},
{
path: "", loadChildren:() => import('./modules/admin/admin.module').then(m=>m.AdminModule),
// canActivate:[rutaProtegidaGuard], data: {role:"admin"}
},
{
  path:"",loadChildren:()=>import('./modules/carrito/carrito.module').then(m=>m.CarritoModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
