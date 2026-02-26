// Support file for all end-to-end tests
// This file is loaded before each test file

// Preserve cookie between tests
beforeEach(() => {
  cy.clearCookies();
});

// Handle uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  // Don't fail the test if there are uncaught exceptions
  return false;
});

// Configure logging
const app = window.app;

// Add custom viewport setup if needed
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
//   return originalFn(url, options);
// });
