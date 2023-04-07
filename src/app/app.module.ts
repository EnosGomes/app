import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OutputComponent } from './output/output.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { NgforComponent } from './ngfor/ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    OutputComponent,
    SwitchcaseComponent,
    NgforComponent
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
