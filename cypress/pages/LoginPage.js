export class LoginPage {
  // Selectors
  usernameInput = '[data-test="username"]';
  passwordInput = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  errorMessage = '[data-test="error"]';

  // Actions
  fillUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  fillPassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return this;
  }

  // Assertions
  verifyErrorMessage() {
    cy.get(this.errorMessage).should('be.visible');
    return this;
  }

  verifyLoginPageDisplayed() {
    cy.get(this.loginButton).should('be.visible');
    return this;
  }
}
