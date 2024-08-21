import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // definimos coleccion para los productos de la web del tipo Producto
private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database:AngularFirestore) {
    // referenciamos coleccion productos y sera subida como "producto" a firebase
    this.productosCollection = database.collection('producto')
   }
   //CREAR productos
   crearProducto(producto: Producto){
   return new Promise (async(resolve, reject) => {
    try{
      // creamos numero identificativo para el producto en la base de datos
   const idProducto = this.database.createId();
   // asignamos ID creado al atributo idProducto de la interfaz "producto" 
   producto.idProducto = idProducto
    
   const resultado = await this.productosCollection.doc(idProducto).set(producto);
   resolve(resultado);
    }catch(error){
      reject(error);
    }

   })
   }
   //OBTENER productos
   obternerProducto(){
    //snapshotChanges toma una captura del estado de los datos
    //pipe  funciona como una tuberia, que retoma el nuevo arreglo de datos
    //map mapea o recorre esa nueva informacion
    // a resguarda la nueva informacion y la envia
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
   }
   //EDITAR productos
modificarProducto(idProducto: string, nuevaData: Producto){
  return this.database.collection('producto').doc(idProducto).update(nuevaData);
}

   //ELIMINAR productos
   eliminarProducto(idProducto : string){
    return new Promise((resolve, reject) => {
      try{
        const respuesta = this.productosCollection.doc(idProducto).delete()
        resolve(respuesta);
      }
        catch(error){
        reject(error)
        }
      
    })
   
  }
}