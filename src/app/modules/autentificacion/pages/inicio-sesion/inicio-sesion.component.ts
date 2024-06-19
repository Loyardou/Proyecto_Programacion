import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  hide = true;

  constructor(
  public servicioAuth: AuthService,
  public servicioFirestore: FirestoreService,
  public servicioRutas : Router
){}
  //###############################local
  //definimos coleccion local
// public coleccionUsuariosLocal : Usuario[];
// constructor(){
//   this.coleccionUsuariosLocal = [
//     {
//       uid: '',
//       nombre: 'Leandro',
//       apellido: 'soto',
//       email: 'leandrosoto@gmail.com',
//       rol: 'admin',
//       password: 'abc123',
//     },
//     {
//     uid: '',
//       nombre: 'pepe',
//       apellido: 'novita',
//       email: 'pepenovita@gmail.com',
//       rol: 'admin',
//       password: 'abc123',
//     },
//     {
//       uid: '',
//       nombre: 'Tomas',
//       apellido: 'Loyola',
//       email: 'tomasloyola@gmail.com',
//       rol: 'admin',
//       password: 'abc123',
//     },
//   ]
// }
usuarioIngresado : Usuario= {
  uid: '',
      nombre: '',
      apellido: '',
      email: '',
      rol: '',
      password: '',
}
async iniciarSesion(){
//   const credenciales = {
//     uid: this.usuarioIngresado.uid,
//     nombre: this.usuarioIngresado.nombre,
//     apellido: this.usuarioIngresado.apellido,
//     email: this.usuarioIngresado.email,
//     rol: this.usuarioIngresado.rol,
//     password: this.usuarioIngresado.password,
//   } 
//   for(let i = 0; 1 < this.coleccionUsuariosLocal.length; i++){
//     const usuarioLocal = this.coleccionUsuariosLocal[i];
//     if(usuarioLocal.nombre === credenciales.nombre &&
//       usuarioLocal.apellido === credenciales.apellido &&
//       usuarioLocal.email === credenciales.email &&
//       usuarioLocal.rol === credenciales.rol &&
//       usuarioLocal.password === credenciales.password
//     ){
//       //notificamos el inicio de sesion
//       alert("lograste iniciar sesion ")
//       break;
//     }else{
//       alert("me parecia que eras tan inutil ")
//     }
//   }
// }
const credenciales = {
  email : this.usuarioIngresado.email,
  password : this.usuarioIngresado.password
}
const res = await this.servicioAuth.IniciarSesion(credenciales.email, credenciales.password)
.then(res => {
  alert("se ha logueado con exito:")
  this.servicioRutas.navigate(['/inicio'])
})
.catch(err =>{
  alert('Hubo un problema al iniciar sesion:('+err)

  this.limpiarinputs();
})
}
limpiarinputs() {
  const inputs = {
    email: this.usuarioIngresado.email = '',
    password: this.usuarioIngresado.password = '',
  }
}
}
  