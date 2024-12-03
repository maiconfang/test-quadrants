import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Necessário para ngForm
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true, // Declara que este componente é standalone
  imports: [FormsModule, ReactiveFormsModule] // Importar FormsModule diretamente
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({}); // Inicializar como um grupo vazio
    this.createForm(); // Criar o formulário
  }

  ngOnInit() {

  }

  createForm() {
    
    this.form = this.fb.group({
      "login": ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      "pass": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    });
  }

  onSubmit(form: FormGroup) { // Definir o tipo como FormGroup
    console.log('Formulário enviado com sucesso!', form.value);
  }
}
