import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Rota padrão para o LoginComponent
  { path: '**', redirectTo: '' } // Redirecionar rotas inválidas para a rota padrão
];
