import { Component } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { CarritoService } from '../../services/carrito.service';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/modules/admin/service/crud.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  productos: Pedido[] = [];
  constructor(
    public servicioCarrito: CarritoService,
    public servicioAuth: AuthService
  ) { }
  //
  ngOnInit() {
    this.servicioAuth.obtenerUid().then(uid => {
      if (uid) {
        this.servicioAuth.obtenerRol(uid).subscribe(rol => {
          if (rol === 'usuario') {
            this.servicioCarrito.iniciarCart();
            this.servicioCarrito.obtenerCarrito().subscribe(producto =>
              this.productos = producto);
          }
        })
      }
    })
    
  }
  quitarPedido(pedido:Pedido){
    this.servicioCarrito.borrarPedido(pedido)
  }
  }

