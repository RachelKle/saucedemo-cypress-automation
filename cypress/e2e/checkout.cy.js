import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

describe('Checkout Tests', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    cy.visit('/');
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.clickLogin();
  });

  it('should complete checkout process', () => {
    inventoryPage.addItemToCart(0);
    inventoryPage.clickCart();
    checkoutPage.clickCheckout();
    checkoutPage.fillFirstName('Rachel');
    checkoutPage.fillLastName('Klein');
    checkoutPage.fillPostalCode('12345');
    checkoutPage.clickContinue();
    checkoutPage.verifyOrderTotal();
    checkoutPage.clickFinish();
    checkoutPage.verifyOrderConfirmation();
  });

  it('should cancel checkout', () => {
    inventoryPage.addItemToCart(0);
    inventoryPage.clickCart();
    checkoutPage.clickCheckout();
    checkoutPage.clickCancel();
    cy.url().should('include', '/inventory');
  });
});
