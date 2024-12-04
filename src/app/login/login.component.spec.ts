import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, LoginComponent] // ReactiveFormsModule necessário para formulários reativos
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show an error message if login and password fields are empty', () => {
    // Garantir que os campos estão vazios
    component.form.controls['login'].setValue('');
    component.form.controls['pass'].setValue('');

    // Simular submissão do formulário
    component.onSubmit();

    // Verificar se a mensagem de erro foi definida corretamente
    expect(component.errorMessage).toBe('Please fill out both login and password fields!');
    expect(component.showMessage).toBeFalse();
  });

  it('should not show an error message if login and password fields are filled', () => {
    // Preencher os campos com valores válidos
    component.form.controls['login'].setValue('testuser');
    component.form.controls['pass'].setValue('password123');

    // Simular submissão do formulário
    component.onSubmit();

    // Verificar se a mensagem de erro não está presente e a mensagem de sucesso é exibida
    expect(component.errorMessage).toBe('');
    expect(component.showMessage).toBeTrue();
  });

  it('should show the success message when valid credentials are submitted', () => {
    // Preencher os campos com valores válidos
    component.form.controls['login'].setValue('Maicon');
    component.form.controls['pass'].setValue('mypassword');

    // Simular submissão do formulário
    component.onSubmit();

    // Verificar se a mensagem de sucesso foi exibida
    expect(component.showMessage).toBeTrue();
    expect(component.errorMessage).toBe('');
    expect(component.form.controls['login'].value).toBe('Maicon');
    expect(component.form.controls['pass'].value).toBe('mypassword');
  });

  it('should not submit if only one field is filled', () => {
    // Preencher apenas o campo de login
    component.form.controls['login'].setValue('testuser');
    component.form.controls['pass'].setValue('');

    // Simular submissão do formulário
    component.onSubmit();

    // Verificar se a mensagem de erro foi exibida
    expect(component.errorMessage).toBe('Please fill out both login and password fields!');
    expect(component.showMessage).toBeFalse();

    // Preencher apenas o campo de senha
    component.form.controls['login'].setValue('');
    component.form.controls['pass'].setValue('password123');

    // Simular submissão do formulário
    component.onSubmit();

    // Verificar se a mensagem de erro foi exibida novamente
    expect(component.errorMessage).toBe('Please fill out both login and password fields!');
    expect(component.showMessage).toBeFalse();
  });
});
