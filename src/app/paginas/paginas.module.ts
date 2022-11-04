import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoComponent } from './foro/foro.component';
import { PracticaComponent } from './practica/practica.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    ForoComponent,
    PracticaComponent,
    RegistroComponent

  ],
  
  exports: [
    ForoComponent,
    PracticaComponent,
    RegistroComponent
  ],

  imports: [
    CommonModule
  ]
})
export class PaginasModule { }
