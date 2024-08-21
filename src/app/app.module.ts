import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';

// vinculaciones importaciones con firebase
import { environment } from 'src/enviroments/environment';
import{AngularFireModule}from '@angular/fire/compat';
import{AngularFireAuthModule}from '@angular/fire/compat/auth'
import{AngularFireStorageModule} from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     // componentes globales
    SharedModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //autentificacion
    AngularFireAuthModule,
    //storage -> bd de imagenes
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
