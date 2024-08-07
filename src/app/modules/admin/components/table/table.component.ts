import { Component } from '@angular/core';
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
  coleccionProductos: Producto[]=[];

producto = new FormGroup({
  nombre: new FormControl('',Validators.required),
  precio: new FormGroup(0, Validators.required),
  descripcion: new FormControl('',Validators.required),
  categoria: new FormControl('',Validators.required),
  imagen: new FormControl('',Validators.required),
  alt: new FormControl('',Validators.required),
})

  constructor(public servicioCrud: CrudService){}
  //subscribe notifica constantemente los cambios actuales del sistema
  //
  ngOnInit(): void{
    this.servicioCrud.obternerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }
  async agregarProducto(){
if(this.producto.valid){
  let nuevoProducto: Producto = {
    idProducto: '',
    nombre: this.producto.value.nombre!,
    descripcion: this.producto.value.descripcion!,
    precio: this.producto.value.precio!,
    categoria: this.producto.value.categoria!,
    imagen: this.producto.value.imagen!,
    alt: this.producto.value.alt!,

  }
  await this.servicioCrud.crearProducto(nuevoProducto)
  .then(producto => {
    alert("Ha agregado un nuevo producto con exito!");

  })
  .catch(error =>{
    alert("Hubo un problema al agregar un nuevo producto:(")
  })
}
  }
}
