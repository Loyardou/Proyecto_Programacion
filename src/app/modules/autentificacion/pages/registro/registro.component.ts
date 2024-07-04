import { ParseSourceFile } from '@angular/compiler';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
// servicio de autentificacion
import { AuthService } from '../../services/auth.service';
//servicio de rutas que otorga angular
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';

// 
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // este "hide" es para el input de contraseña
  hide = true;

  // IMPORTACION DEL MODELO / INTERFAZ
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }
  // crear una colleccion para usuarios
  coleccionUsuarios: Usuario[] = [];
  // referenciamos a nuestros servicios
  constructor(
    public servicioAuth: AuthService, // metodos de autentificacion
    public servicioRutas: Router,// metodo de navegacion
    public servicioFirestore : FirestoreService,// vincula UID con la coleccion

  ) { }

  // funcion para el registro
async  registrar() {
    /*
      const credenciales ={
          uid: this.usuarios.uid,
          nombre: this.usuarios.nombre,
          apellido: this.usuarios.apellido,
          email: this.usuarios.email,
          rol: this.usuarios.rol,
          password: this.usuarios.password
  
      } 
  
      this.coleccionUsuarios.push(credenciales)
      console.log(credenciales);
      console.log(this.coleccionUsuarios);*/
      const credenciales = {
        email: this.usuarios.email,
        password: this.usuarios.password
      }
      const respuesta = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
      // el metodo then nos devuelve la respuesta esperada por la promesa
      .then (respuesta =>{
        alert("ha agregado un usuario con exito :")
        // accedemos al servicio de rutas -> metodo navigate
        // metodo navigate = permite dirigirnos a difeerentes vistas
        this.servicioRutas.navigate(['/inicio']);
      })
      //el metodo catch toma una falla y la devuelve un error
      .catch(error=> {
        alert('hubo un problema al registrar un usuario nuevo');
      })
      const uid = await this.servicioAuth.obtenerUid();

      this.usuarios.uid = uid;
      //Encriptacion de la contraseña de usuario
      /*
       *SHA-256 es un algoritmo de hashin seguro que toma una entrada (en este caso la contraseña)
        y produce una cadena de caracteres HEXADECIMAL que representa su hash
        toString( : Convierte el resultado del hash en una cadena de caracteres legible)
      */
     this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString();
       this.guardarUsuario();
    this.limpiarinputs();
  }
  // funcion para agregar nuevo usuario
async guardarUsuario(){
  this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
  .then(respuesta => {
    console.log(this.usuarios)
  })
  .catch(err => {
    console.log('Error =>',err)
  })

}
 
  limpiarinputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = '',
    }
  }

}

