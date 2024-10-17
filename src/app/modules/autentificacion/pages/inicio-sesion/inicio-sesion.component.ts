import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2'
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
    public servicioRutas: Router
  ) { }
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
  usuarioIngresado: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  async iniciarSesion() {
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
    

    const credenciales = {
      email: this.usuarioIngresado.email,
      password: this.usuarioIngresado.password
    }
    try {
      // obtenemos el usuario desde la BD -> Cloud Firestore
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email);
      // ! si es diferente
      // .empty -> metodo de firebase para marcar si algo es vacio
      if (!usuarioBD || usuarioBD.empty) {
        Swal.fire({
          title: "Error",
          text: "El email no esta registrado!",
          icon: "error"
        });
        this.limpiarinputs();
        return;
      }
      // Primer documento (registro) en la coleccion de usuarios que se obtiene desde la consulta.
      const usuarioDoc = usuarioBD.docs[0];
      //Extraer los datos del documento en forma de un objeto y se especifica como de tipo "usuario" -> haciendo referencia a nuestra interfaz de usuario.
      const usuarioData = usuarioDoc.data() as Usuario;

      // hash de la contraseña ingresada por el usuario
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

      if (hashedPassword !== usuarioData.password) {
        Swal.fire({
          title: "Error",
          text: "Contraseña incorrecta!",
          icon: "error"
        });
        this.usuarioIngresado.password = '';
        return;
      }
      const res = await this.servicioAuth.IniciarSesion(credenciales.email, credenciales.password)
        .then(res => {
          Swal.fire({
            title: "Bien hecho",
            text: "Te has logueado con exito!",
            icon: "success"
          });
          this.servicioRutas.navigate(['/inicio'])
        })
        .catch(err => {
          alert('Hubo un problema al iniciar sesion:(' + err)

          this.limpiarinputs();
        })
    } catch (error) {
      this.limpiarinputs();
    }


  }
  limpiarinputs() {
    const inputs = {
      email: this.usuarioIngresado.email = '',
      password: this.usuarioIngresado.password = '',
    }
  }
}
