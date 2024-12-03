import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component'; // Certifique-se de que o caminho está correto

@NgModule({
  imports: [
    CommonModule,
    LoginComponent // Importar LoginComponent diretamente (standalone)
  ],
  exports: [
    LoginComponent // Exportar LoginComponent para uso externo
  ]
})
export class LoginModule { }
