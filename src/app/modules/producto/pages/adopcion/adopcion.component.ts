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
  imagen : "https://upload.wikimedia.org/wikipedia/commons/5/5e/American_Bulldog_600.jpg",
  alt : "Perro",
  Photo: "Tomas Loyola",
 },
 {
  id: "Hugon",
  nombre : "Hugon" ,
  imagen : "https://th.bing.com/th/id/OIP.RrrMBQkqWGqwOuB-uC-FlQHaHa?rs=1&pid=ImgDetMain",
  alt : "Perro",
  Photo: "Tomas Loyola",
 },
 {
  id: "Lopez",
  nombre : "Lopez" ,
  imagen : "https://t1.uc.ltmcdn.com/es/posts/6/3/1/por_que_a_mi_perro_se_le_caen_los_dientes_y_que_hago_50136_600_square.jpg",
  alt : "Perro",
  Photo: "Tomas Loyola",
 },
 {
  id: "Mich",
  nombre : "Mich" ,
  imagen : "https://t2.uc.ltmcdn.com/es/posts/8/7/5/cuanto_debe_pesar_un_galgo_31578_600_square.jpg",
  alt : "Perro",
  Photo: "Tomas Loyola",
 },
  ]
 
}