import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Necessário para ngForm
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true, // Declares that this component is standalone
  imports: [FormsModule, ReactiveFormsModule, CommonModule] // Import FormsModule directly
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  showMessage: boolean = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({}); // Initialize as an empty group
    this.createForm(); // Create form
  }

  ngOnInit() {

  }

  createForm() {
    
    this.form = this.fb.group({
      "login": ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      "pass": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    });
  }


  onSubmit() {
    if (this.form.valid) {
      this.showMessage = true;
      this.errorMessage = '';
      console.log('Form sent successfully!', this.form.value);
    } else {
      this.showMessage = false;
      this.errorMessage = 'Please fill out both login and password fields!';
    }
  }
  

}
