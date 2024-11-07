import { Injectable } from '@angular/core';
import { CrudService } from '../../admin/service/crud.service';
import { AuthService } from '../../autentificacion/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Pedido } from 'src/app/models/pedido';
import { map } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  pedido: Pedido = {
    idPedido: '',
    producto: {
      idProducto: '',
      nombre: '',
      precio: 0,
      descripcion: '',
      categoria: '',
      imagen: '',
      alt: '',
      stock:0,

    },
    cantidad: 0,
    total: 0,

  }

  private pedidosColeccion: AngularFirestoreCollection<Pedido>

  private uid: string | null = null;

  constructor(
    private servicioCrud: CrudService,
    private servicioAuth: AuthService,
    private servicioFirestore: AngularFirestore,
  ) {
    // creamos un subcoleccion dentro de la coleccion de usuarios y le damos ese valor a pedidosColeccion 
    this.pedidosColeccion = this.servicioFirestore.collection(`usuarios/${this.uid}/pedido`)
  }
  //funcion para inicializar el carrito
  iniciarCart() {
    this.servicioAuth.obtenerUid().then(uid => {
      //Obtenemos el ID del usuario para la subcoleccion
      this.uid = uid
      if (this.uid) {
        console.log(this.uid)
      } else {
        console.error('No se obtuvo el UID')
      }
    })
  }
  obtenerCarrito() {
    return this.pedidosColeccion.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }
  crearPedido(producto:Producto, stock: number) {
    try {
      const idPedido = this.servicioFirestore.createId();

      //Reemplazamos los valores de pedido por los valores que obtuvimos 
      this.pedido.idPedido = idPedido;
      this.pedido.producto = producto;
      this.pedido.cantidad = stock
      this.pedido.total = producto.precio*stock

      this.pedidosColeccion.doc(idPedido).set(this.pedido);

    }catch(error){
      Swal.fire({
        title:'¡Oh no!',
        text:'Ha ocurrido un error al subir su producto',
        icon:'error',
      })
    }
 }
}

