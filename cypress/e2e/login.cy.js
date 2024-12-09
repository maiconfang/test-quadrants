describe('Login Functionality', () => {
  beforeEach(() => {
  // Visit the login page
    cy.visit('http://localhost:4200'); // Make sure the application is running
  });

  it('should show an error message if login and password are empty', () => {
    cy.get('#login_submit').click();
    cy.contains('Please fill out both login and password fields!').should('be.visible');
  });

  it('should not submit if only login is filled', () => {
    cy.get('#login_username').type('testuser');
    cy.get('#login_submit').click();
    cy.contains('Please fill out both login and password fields!').should('be.visible');
  });

  it('should not submit if only password is filled', () => {
    cy.get('#login_password').type('password123');
    cy.get('#login_submit').click();
    cy.contains('Please fill out both login and password fields!').should('be.visible');
  });

  it('should successfully submit with valid credentials', () => {
    cy.get('#login_username').type('testuser');
    cy.get('#login_password').type('password123');
    cy.get('#login_submit').click();
    cy.contains('Both login and password fields have been filled out successfully!').should('be.visible');
  });
});
