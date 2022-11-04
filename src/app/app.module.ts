import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { N5Module } from './n5/n5.module';
import { NavbarModule } from './navbar/navbar.module';
import { ForoComponent } from './paginas/foro/foro.component';
import { PaginasModule } from './paginas/paginas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    PaginasModule,
    N5Module,
    AppRoutingModule
  ],
  exports:[
    NavbarModule,
    PaginasModule,
    N5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
