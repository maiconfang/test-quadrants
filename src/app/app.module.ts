import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importar AppComponent standalone

@NgModule({
  imports: [
    BrowserModule,
    AppComponent // Importar o AppComponent (standalone)
  ],
  providers: [],
  bootstrap: [] // Configurar AppComponent como o ponto de entrada
})
export class AppModule { }
