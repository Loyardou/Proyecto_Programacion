import { Injectable } from '@angular/core';
// servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
// referenciar auth de firebase
  constructor(public auth:AngularFireAuth) { }

  // funcion para tomas UID


  //funcion para registro
registrar(email : string, password : string,){
  return this.auth.createUserWithEmailAndPassword(email, password);
}

  // funcion para inicio de sesion
IniciarSesion(email : string, password : string,){
  // valida el email y contraseña
  return this.auth.signInWithEmailAndPassword(email, password);
}

  //funcion para cerrar sesion
  cerrarSesion(){
    // devolver una promesa vacia
    return this.auth.signOut();
  }

async obtenerUid(){
  // nos va a generar una promesa, y la constante la va a capturar
  const user = await this.auth.currentUser;
  /* si el usuario no respeta la estructura de la interfaz 
  si tuvo problemas para el registro -> j. : mal internet
  */
  if(user == null){
    return null;
  }else{
    return user.uid;
  }

}
}
