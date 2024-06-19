import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
//  componentes de angular
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistroComponent,
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    // ANGULAR
    FormsModule,
  ],
  exports:[
    RegistroComponent,
    InicioSesionComponent
  ],
})
export class AutentificacionModule { }
