import { Component, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../service/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Crear coleccion de productos del tipo producto -> lo definimos como un array
  coleccionProductos: Producto[] = [];
  modalVisibleProducto: boolean = false;


  //Variable va a tomas el producto que nosotros elijamos
  productoSeleccionado!: Producto;

  //obtendra el nombre de la imagen
  nombreImagen!: string;

  //obtendra la ruta de la imagen
  imagen!: string;

  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    // imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
  })

  constructor(public servicioCrud: CrudService) { }
  //subscribe notifica constantemente los cambios actuales del sistema
  //
  ngOnInit(): void {
    this.servicioCrud.obternerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }
  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        descripcion: this.producto.value.descripcion!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!,
        //imagen ahora toma la URL generada desde Storage
        imagen: 'this.producto.value.imagen!',
        alt: this.producto.value.alt!,

      }

      //enviamos nombre y url de la imagen; definimos carpeta de imagenes como "productos"

      await this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
        .then(res => {
          this.servicioCrud.obtenerUrlImagen(res)
            .then(url => {
              // Ahora metodo crearProducto recibe los datos del formulario y la URL formateada
              this.servicioCrud.crearProducto(nuevoProducto, url)
                .then(producto => {
                  alert("Ha agregado un nuevo producto con exito!)");
                  this.producto.reset();

                })
                .catch(error => {
                  alert("Hubo un problema al agregar un nuevo producto:(")
                  this.producto.reset();
                })
            })
        })



    }
  }
  mostrarBorrar(productoSeleccionado: Producto) {
    this.modalVisibleProducto = true;
    this.productoSeleccionado = productoSeleccionado;
  }



  //Funcion para eliminar definitivamente al producto
  borrarProducto() {
    // envia ID del producto eliminado y la ubicacion en el almacenamiento de STORAGE
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto, this.productoSeleccionado.imagen)
      .then(respuesta => {
        alert("se ha eliminado correctamente")
      })
      .catch(error => {
        alert("No se ha podido eliminar el producto \n" + error);
      })

  }


  mostrarEditar(productoSeleccionado: Producto) {
    this.productoSeleccionado = productoSeleccionado;
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      categoria: productoSeleccionado.categoria,
      // imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt,

    })
  }


  editarProducto() {
    let datos: Producto = {
      idProducto: this.productoSeleccionado.idProducto,
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      imagen: this.productoSeleccionado.imagen!,
      alt: this.producto.value.alt!,

    }
    //verificamos que el usuario ingrese una nueva imagen o no
    if (this.imagen) {
      this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
        .then(resp => {
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {
              datos.imagen = url;
              // actualizamos los datos desde el formulario de edicion
              this.actualizarProducto(datos)
              // vaciamos casillas del formulario
              this.producto.reset();
            })
            .catch(error => {
              alert("hubo un problema al subir la imagen:( \ n " + error)
              this.producto.reset();
            })
        })
    } else {

      /*
      Actualizamos 
       */

      this.actualizarProducto(datos)
    }
  }


  actualizarProducto(datos: Producto) {

    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
      .then(producto => {
        alert("El producto fue modificado con exito")
      })
      .catch(error => {
        alert("Hubo un problema al modificar el producto")
      })

    //Metodo para cargar imagenes
  }

  cargarImagen(event: any) {
    //variable para obtener el archivo subido desde el input del HTML
    let archivo = event.target.files[0];

    //variable para crear un nuevo objeto de tipo "archivo" o "file" y poder leerlo
    let reader = new FileReader();

    if (archivo != undefined) {
      /*
      LLamamos a metodo readAsDataUrl para leer toda la informacion recibida.
      Enviamos como parametro el archivo porque sera el encargado de tener la info,
      ingresada por el usuario
       */
      reader.readAsDataURL(archivo);

      //Definimos que haremos con la informacion mediante funcion flecha
      reader.onloadend = () => {
        let url = reader.result;
        // verificamos que la url sea existente y diferente a "nula"
        if (url != null) {
          //Definimos nombre de la imagen con atributo "name" del input
          this.nombreImagen = archivo.name;

          // definimos ruta de la imagen segun url recibida en formato cadena (string)
          this.imagen = url.toString();

        }
      }

    }

  }


}