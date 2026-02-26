export class CheckoutPage {
  // Selectors
  checkoutButton = '[data-test="checkout"]';
  cancelButton = '[data-test="cancel"]';
  firstNameInput = '[data-test="firstName"]';
  lastNameInput = '[data-test="lastName"]';
  postalCodeInput = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';
  finishButton = '[data-test="finish"]';
  orderTotal = '[data-test="total-label"]';
  confirmationMessage = '[data-test="complete-header"]';

  // Actions
  clickCheckout() {
    cy.get(this.checkoutButton).click();
    return this;
  }

  fillFirstName(firstName) {
    cy.get(this.firstNameInput).type(firstName);
    return this;
  }

  fillLastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
    return this;
  }

  fillPostalCode(postalCode) {
    cy.get(this.postalCodeInput).type(postalCode);
    return this;
  }

  clickContinue() {
    cy.get(this.continueButton).click();
    return this;
  }

  clickFinish() {
    cy.get(this.finishButton).click();
    return this;
  }

  clickCancel() {
    cy.get(this.cancelButton).click();
    return this;
  }

  // Assertions
  verifyOrderTotal() {
    cy.get(this.orderTotal).should('be.visible');
    return this;
  }

  verifyOrderConfirmation() {
    cy.get(this.confirmationMessage).should('contain', 'Thank you');
    return this;
  }
}
