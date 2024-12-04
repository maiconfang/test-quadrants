import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginComponent // Import LoginComponent directly (standalone)
  ],
  exports: [
    LoginComponent // Export LoginComponent for external use
  ]
})
export class LoginModule { }
