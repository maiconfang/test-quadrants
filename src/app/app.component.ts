import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Importar o LoginComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule,LoginComponent] // Importar RouterModule para suporte ao router-outlet
})
export class AppComponent {
  title = 'test-quadrants';
}
