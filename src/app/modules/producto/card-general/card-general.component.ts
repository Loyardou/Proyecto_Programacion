import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../admin/service/crud.service';


@Component({
  selector: 'app-card-general',
  templateUrl: './card-general.component.html',
  styleUrls: ['./card-general.component.css']
})
export class CardGeneralComponent {
  coleccionProductos: Producto[] = [];

  //Variable local para obtener producto seleccionado
  productoSeleccionado!: Producto;
  
  //Variable para manejar estado de un modal
  modalVisible: boolean = false;

  //booleano para manejar la visibilidad de "ultima compra"
  compraVisible : boolean = false;

  //Directivas para comunicarse con el componente padre
  @Input() productoReciente: string = '';

  //Output sera definido como un nuevo evento
  @Output() productoAgregado = new EventEmitter<Producto>();

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


  agregarProducto(info: Producto){
    this.productoAgregado.emit(info);
    this.compraVisible = true;
  }
}
