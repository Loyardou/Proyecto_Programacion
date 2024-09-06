import { Component } from '@angular/core';
import { Adopcion } from 'src/app/models/adopcion';



@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css']
})
export class AdopcionComponent {
  public info: Adopcion[] = [
    
    {
      id: "Iurko",
      nombre : "Iurko" ,
      imagen : "https://cdn-3.expansion.mx/dims4/default/2d9c23c/2147483647/strip/true/crop/351x351+137+0/resize/600x600!/format/webp/quality/90/?url=https:%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fmedia%2F2013%2F06%2F22%2Fgus-perros-concurso-perro-mas-feo-del-mundo.jpg",
      alt : "Perro",
      Photo: "Tomas Loyola",
    },
 {
  id: "Tomas",
  nombre : "Tomas" ,
  imagen : "https://mascotaspetskennel.com/wp-content/uploads/2023/02/Rottweiler-2-600x600.png",
  alt : "Perro",
  Photo: "Tomas Loyola",
 },
 {
  id: "Guido",
  nombre : "Guido" ,
  imagen : "https://th.bing.com/th/id/OIP.txiVVogMQUPapuaqessqvwHaF9?pid=ImgDet&w=145&h=145&c=7",
  alt : "Perro",
  Photo: "Tomas Loyola",
 },
 {
  id: "Tata",
  nombre : "Tata" ,
  imagen : "https://th.bing.com/th/id/OIP.DTzhe7MgTZNhxmO-0hiu7AHaGF?pid=ImgDet&w=145&h=145&c=7",
  alt : "Perro",
  Photo: "Tomas Loyola",
 },
 {
  id: "Lopez",
  nombre : "Lopez" ,
  imagen : "https://th.bing.com/th/id/OIP.d76BzPbElpBTDEtmQVQ0BAD6D6?pid=ImgDet&w=145&h=124.51303155006859&c=7",
  alt : "Perro",
  Photo: "Tomas Loyola",
 },
 {
  id: "Mich",
  nombre : "Mich" ,
  imagen : "https://th.bing.com/th/id/OIP.L5p3OunKF76cswQQmwYuMQHaED?pid=ImgDet&w=145&h=145&c=7",
  alt : "Perro",
  Photo: "Tomas Loyola",
 },
  ]
 
}