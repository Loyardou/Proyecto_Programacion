import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
     MatButtonModule,
      MatIconModule,
      MatMenuModule,
      AppRoutingModule
  ],
  exports:[
  NavbarComponent,
  FooterComponent,
  MatIconModule,
   MatButtonModule,
   MatToolbarModule,
   MatButtonModule,
     MatMenuModule]
})
export class SharedModule { }
