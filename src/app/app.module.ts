import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
