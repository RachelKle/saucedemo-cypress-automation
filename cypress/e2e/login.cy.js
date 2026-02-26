import { LoginPage } from '../pages/LoginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('should login with valid credentials', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.clickLogin();
    cy.url().should('include', '/inventory');
  });

  it('should display error with invalid credentials', () => {
    loginPage.fillUsername('invalid_user');
    loginPage.fillPassword('invalid_pass');
    loginPage.clickLogin();
    loginPage.verifyErrorMessage();
  });
});
