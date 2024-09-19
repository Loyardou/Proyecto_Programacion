import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
// importaciones para el manejo de archivos y referencias de storage
import { getDownloadURL, getStorage, ref, UploadResult, uploadString, deleteObject } from 'firebase/storage';
// getDownloadURL -> Para obtener la url de descarga de una imagen subida
// getStorage -> para obtener la instancia de almacenamiento
// ref -> para crear referencias a ubicaciones en el almacenamiento
// UploadResult -> tipo que representa el resultado de una operacion subida
// uploadstring -> para subir imagenes en formato de cadena (string)
// deleteObject -> para eliminar un espacio en el almacenamiento

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // definimos coleccion para los productos de la web del tipo Producto
  private productosCollection: AngularFirestoreCollection<Producto>

  //Definimos variable "respuesta" que podra subir resultados
  private respuesta!: UploadResult;

  //inicializamos servicio de storage
  private storage = getStorage();
  constructor(private database: AngularFirestore) {
    // referenciamos coleccion productos y sera subida como "producto" a firebase
    this.productosCollection = database.collection('producto')
  }
  //CREAR productos -> obtiene datos del formulario y url de la imagen
  crearProducto(producto: Producto, url: string) {
    return new Promise(async (resolve, reject) => {
      try {
        // creamos numero identificativo para el producto en la base de datos
        const idProducto = this.database.createId();

        // asignamos url recibida del parametro al atributo imagen de la interfaz producto
        producto.imagen = url;
        // asignamos ID creado al atributo idProducto de la interfaz "producto" 
        producto.idProducto = idProducto

        const resultado = await this.productosCollection.doc(idProducto).set(producto);
        resolve(resultado);
      } catch (error) {
        reject(error);
      }

    })
  }
  //OBTENER productos
  obternerProducto() {
    //snapshotChanges toma una captura del estado de los datos
    //pipe  funciona como una tuberia, que retoma el nuevo arreglo de datos
    //map mapea o recorre esa nueva informacion
    // a resguarda la nueva informacion y la envia
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }
  //EDITAR productos
  modificarProducto(idProducto: string, nuevaData: Producto) {
    return this.database.collection('producto').doc(idProducto).update(nuevaData);
  }

  //ELIMINAR productos
  eliminarProducto(idProducto: string, imagenUrl: string) {
    return new Promise((resolve, reject) => {
      try {
        //Definimos refencia local de storage en el bloque "try"
        const storage = getStorage();
        // Definimos refencia local desde el almacenamiento de storage
        const referenciaImagen = ref(storage, imagenUrl);

        //eleiminamos la imagen desde el almacenamiento
        deleteObject (referenciaImagen)
        .then((res)=> {
          // accedo a la coleccion, busco su id y lo elimino
          const respuesta = this.productosCollection.doc(idProducto).delete()
          resolve(respuesta);
        })
        .catch(error => {
          reject("Error al eliminar la imagen \n"+error);

        })
       
       


      }
      catch (error) {
        reject(error)
      }

    })

  }
  // OBTENER url de las imagenes
  obtenerUrlImagen(respuesta: UploadResult){
    
    //Retorna Url obtenida como Referencia
    return getDownloadURL(respuesta.ref)

  }
/**
 * Parametros definidos
 * @param {string} nombre <-nombre de la imagen
 * @param {any} imagen <-tipo de imagenes que se pueden surbir (extensiones)
 * @param {string} ruta <- ruta de almacenamiente de las imagenes
 * @returns <- se retorna lo obtenido
 */
//Subir imagenes con sus referencias
async subirImagen(nombre: string, imagen: any, ruta : string){
  try{
    // crear una referencia de imagen
    // accede a storage ( almacenamineto) ruta (carpeta) / nombre(nombreImagen)
    let referenciaImagen = ref(this.storage, ruta + '/' + nombre);
    this.respuesta = await uploadString(referenciaImagen, imagen, 'data_url')
    .then(resp =>{
      return resp;

    })
return this.respuesta

  }
  catch(error){
    console.log("error: /n"+error)
    return this.respuesta;
  }
}
}
