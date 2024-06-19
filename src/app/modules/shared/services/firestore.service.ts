import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  // definimos una coleccion de usuarios privada
  //va a ser una coleccion de firestore
  // respetara la estructura de datos de la interfaz usuario
  private usuariosCollection: AngularFirestoreCollection<Usuario>
  

  
  constructor(private database : AngularFirestore) { 
this.usuariosCollection = this.database.collection<Usuario>('usuarios')

}
agregarUsuario(usuario : Usuario, id : string){
  /* generamos una promesa y utiliza los metodos:
  RESOLVE: promesa resuelta -> funciona correctamente
  REJECT : promesa rechaza -> ocurrio una falla 
  
  */
  return new Promise (async(resolve, reject) =>{
    try{
      usuario.uid = id ;
      //la constante resultado  coleccion de usuarios, envia como documento el UID
      // y setea la informacion que ingresemos en el Registro
      const resultado = await this.usuariosCollection.doc(id).set(usuario);
      resolve(resultado);
      //bloque catch encapsula una falla y la vuelve un error
    }catch(error){
      reject(error)
    }
  }
)

}
}
