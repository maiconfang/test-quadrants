import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent Test', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, LoginComponent] // ReactiveFormsModule required for reactive forms
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show an error message if login and password fields are empty', () => {
    // Ensure fields are empty
    component.form.controls['login'].setValue('');
    component.form.controls['pass'].setValue('');

    // Simulate form submission
    component.onSubmit();

    // Verify if the error message is set correctly
    expect(component.errorMessage).toBe('Please fill out both login and password fields!');
    expect(component.showMessage).toBeFalse();
  });

  it('should not show an error message if login and password fields are filled', () => {
    // Fill fields with valid values
    component.form.controls['login'].setValue('testuser');
    component.form.controls['pass'].setValue('password123');

    // Simulate form submission
    component.onSubmit();

    // Verify if the error message is not present and the success message is displayed
    expect(component.errorMessage).toBe('');
    expect(component.showMessage).toBeTrue();
  });

  it('should show the success message when valid credentials are submitted', () => {
    // Fill fields with valid values
    component.form.controls['login'].setValue('Maicon');
    component.form.controls['pass'].setValue('mypassword');

    // Simulate form submission
    component.onSubmit();

    // Verify if the success message is displayed
    expect(component.showMessage).toBeTrue();
    expect(component.errorMessage).toBe('');
    expect(component.form.controls['login'].value).toBe('Maicon');
    expect(component.form.controls['pass'].value).toBe('mypassword');
  });

  it('should not submit if only one field is filled', () => {
    // Fill only the login field
    component.form.controls['login'].setValue('testuser');
    component.form.controls['pass'].setValue('');

    // Simulate form submission
    component.onSubmit();

    // Verify if the error message is displayed
    expect(component.errorMessage).toBe('Please fill out both login and password fields!');
    expect(component.showMessage).toBeFalse();

    // Fill only the password field
    component.form.controls['login'].setValue('');
    component.form.controls['pass'].setValue('password123');

    // Simulate form submission
    component.onSubmit();

    // Verify if the error message is displayed again
    expect(component.errorMessage).toBe('Please fill out both login and password fields!');
    expect(component.showMessage).toBeFalse();
  });


  // should display correct placeholder text for login and password fields
  it('should display correct placeholder text for login and password fields', () => {
    const loginInput: HTMLInputElement = fixture.nativeElement.querySelector('#login_username');
    const passwordInput: HTMLInputElement = fixture.nativeElement.querySelector('#login_password');

    expect(loginInput.placeholder).toBe('Login');
    expect(passwordInput.placeholder).toBe('Password');    
  });


  // should initialize the form in its default state
  it('should initialize the form in its default state', () => {
    expect(component.form.controls['login'].value).toBe('');
    expect(component.form.controls['pass'].value).toBe('');
    expect(component.showMessage).toBeFalse();
    expect(component.errorMessage).toBe('');
  });


  // should display icons in the input fields
  it('should display icons in the input fields', () => {
    const loginIcon: HTMLElement = fixture.nativeElement.querySelector('.fa-user');
    const passwordIcon: HTMLElement = fixture.nativeElement.querySelector('.fa-key');
    
    expect(loginIcon).toBeTruthy();
    expect(passwordIcon).toBeTruthy();
  });

  
});
