import { Injectable } from '@angular/core';
// servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private rolUsuario: string | null = null;
  // referenciar auth de firebase

  constructor(
    private auth: AngularFireAuth,
    private servicioFireStore: AngularFirestore
  ) { }

  // funcion para tomas UID


  //funcion para registro
  registrar(email: string, password: string,) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // funcion para inicio de sesion
  IniciarSesion(email: string, password: string,) {
    // valida el email y contraseña
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  //funcion para cerrar sesion
  cerrarSesion() {
    // devolver una promesa vacia
    return this.auth.signOut();
  }

  async obtenerUid() {
    // nos va a generar una promesa, y la constante la va a capturar
    const user = await this.auth.currentUser;
    /* si el usuario no respeta la estructura de la interfaz 
    si tuvo problemas para el registro -> j. : mal internet
    */
    if (user == null) {
      return null;
    } else {
      return user.uid;
    }

  }
  // Funcion que busca un usuario en la coleccion de 'usuarios' cuyo correo electronico coincida con el valor proporcionado

  obtenerUsuario(email: string) {
    return this.servicioFireStore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }
  obtenerRol(uid: string): Observable <string | null>{
    return this.servicioFireStore.collection('usuarios').doc(uid).valueChanges()
    .pipe(map((usuario:any) => usuario ? usuario.rol : null));

  }
  enviarRolUsuario(rol:string){
    this.rolUsuario = rol;
  }
  obtenerRolUsuario(): string  | null {
    return this.rolUsuario;
  }
}
