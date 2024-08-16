import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../admin/service/crud.service';

@Component({
  selector: 'app-card-general',
  templateUrl: './card-general.component.html',
  styleUrls: ['./card-general.component.css']
})
export class CardGeneralComponent {
  coleccionProductos: Producto[] = [];

  productoSeleccionado!: Producto;
  
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{
    this.servicioCrud.obternerProducto().subscribe(producto =>{
      this.coleccionProductos = producto;

    })

  }
  mostrarVer(info: Producto){
    this.modalVisible = true;
    this.productoSeleccionado = info;
  }
}
