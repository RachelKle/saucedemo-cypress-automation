import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

describe('Inventory Tests', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    cy.visit('/');
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.clickLogin();
  });

  it('should display inventory items', () => {
    inventoryPage.verifyItemsLoaded();
    inventoryPage.verifyItemCount(6);
  });

  it('should add item to cart', () => {
    inventoryPage.addItemToCart(0);
    inventoryPage.verifyCartBadge('1');
  });

  it('should sort items by price', () => {
    inventoryPage.sortBy('price-asc');
    inventoryPage.verifySorting('asc');
  });
});
