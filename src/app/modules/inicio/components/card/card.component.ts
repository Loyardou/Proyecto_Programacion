import { Component } from '@angular/core';
import { Alimento } from 'src/app/models/alimento';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
public info: Alimento[];

constructor(){
  this.info = [
    {
    id: "Dogui",
    nombre : "Dogui",
    imagen : "https://images.fravega.com/f1000/93ac3de27321d740325fad7b021d1070.jpg",
    alt : "alimento",
    
    },
    {
      id: "Pedigree",
      nombre : "Pedigree",
      imagen : "https://th.bing.com/th/id/OIP.Tdc4ZiqUQeWFn8Pnllk69gHaHa?w=195&h=195&c=7&r=0&o=5&pid=1.7",
      alt : "Pedigree",
      
      },
      {
        id: "Purina",
        nombre : "Purina",
        imagen : "https://th.bing.com/th/id/OIP.ZrI6NClKmhHKcKu_X-tJFQAAAA?pid=ImgDet&w=175&h=175&c=7",
        alt : "Purina",
        
        }
  ]
}
}
