import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import swal from 'sweetalert2';
 
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
//String que modificara el valor de @input en el componente hijo
  product:string = '';

  //coleccion de productos añadidos a la lista 
productosCarrusel : Producto[] = []


productoAnadido(producto:Producto){
  //Modificador del valor de 'product'
this.product = `${producto.nombre} : $${producto.precio}`;
try {
  /*Agreggamos la informacion por el parametro de la funcion a la coleccion de carrusel*/ 
  this.productosCarrusel.push(producto)

  swal.fire({
    title:'Bien',
    text:'Ha añadido este producto con exito',
    icon: 'info'


  })
} catch (error) {
  
  swal.fire({
    title:'Oh no!',
  text:'Ha ocurrido un error\n'+error,
    icon: 'error'
})


}
}
}
