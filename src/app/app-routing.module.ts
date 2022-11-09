import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DLCComponent } from './n5/dlc/dlc.component';
import { GuiaComponent } from './n5/guia/guia.component';
import { HKKComponent } from './n5/hkk/hkk.component';
import { VocabularioComponent } from './n5/vocabulario/vocabulario.component';
import { ForoComponent } from './paginas/foro/foro.component';
import { PracticaComponent } from './paginas/practica/practica.component';
import { RegistroComponent } from './paginas/registro/registro.component';

const routes: Routes = [
  {
    path:'dlc',
    component:DLCComponent
  },
  {
    path:'guia',
    component:GuiaComponent
  },
  {
    path:'hkk',
    component:HKKComponent
  },
  {
    path:'vocabulario',
    component:VocabularioComponent
  },
  {
    path:'foro',
    component:ForoComponent
  },
  {
    path:'practica',
    component:PracticaComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
