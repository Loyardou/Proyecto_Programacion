import { Component } from '@angular/core';
import { Anime } from 'src/app/models/anime';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
public info: Anime[];

constructor(){
  this.info = [
    {
    id: "Solo Leveling",
    nombre : "Solo Leveling",
    imagen : "https://th.bing.com/th/id/OIP.cc3Gqrzdb-LkHOkcv0ok2wHaDt?rs=1&pid=ImgDetMain",
    alt : "jun woo",
    capitulos : 13,
    },
    {
      id: "Jujutsu Kaisen",
      nombre : "Jujutsu Kaisen",
      imagen : "https://th.bing.com/th/id/OIP.dx5Bh7nfq8dYo-8hy4sL7AHaEK?rs=1&pid=ImgDetMain",
      alt : "gojo",
      capitulos : 13,
      },
      {
        id: "Black Clover",
        nombre : "Black Clover",
        imagen : "https://th.bing.com/th/id/OIP.0Bipd3-cRVckv52NJc3-pAHaEK?rs=1&pid=ImgDetMain",
        alt : "jun woo",
        capitulos : 13,
        }
  ]
}
}
