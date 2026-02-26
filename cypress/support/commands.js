// Custom commands for Cypress tests

// Login command
Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

// Add item to cart by index
Cypress.Commands.add('addToCart', (itemIndex) => {
  cy.get('[data-test="add-to-cart-button"]').eq(itemIndex).click();
});

// Navigate to cart
Cypress.Commands.add('goToCart', () => {
  cy.get('[data-test="shopping-cart-link"]').click();
});

// Verify error message
Cypress.Commands.add('verifyError', (message) => {
  cy.get('[data-test="error"]').should('contain', message);
});

// Take a screenshot
Cypress.Commands.add('screenshot', (name) => {
  cy.screenshot(name);
});
