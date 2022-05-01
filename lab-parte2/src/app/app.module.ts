import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparadorImagensComponent } from './components/comparador-imagens/comparador-imagens.component';
import { ComparadorComponent } from './components/comparador/comparador.component';

@NgModule({
  declarations: [
    AppComponent,
    ComparadorImagensComponent,
    ComparadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
