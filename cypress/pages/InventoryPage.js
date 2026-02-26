export class InventoryPage {
  // Selectors
  inventoryItems = '[data-test="inventory-item"]';
  cartButton = '[data-test="shopping-cart-link"]';
  cartBadge = '[data-test="shopping-cart-badge"]';
  sortDropdown = '[data-test="product-sort-container"]';
  addToCartButtons = '[data-test="add-to-cart-button"]';

  // Actions
  addItemToCart(itemIndex) {
    cy.get(this.addToCartButtons).eq(itemIndex).click();
    return this;
  }

  clickCart() {
    cy.get(this.cartButton).click();
    return this;
  }

  sortBy(sortOption) {
    cy.get(this.sortDropdown).select(sortOption);
    return this;
  }

  // Assertions
  verifyItemsLoaded() {
    cy.get(this.inventoryItems).should('have.length.greaterThan', 0);
    return this;
  }

  verifyItemCount(count) {
    cy.get(this.inventoryItems).should('have.length', count);
    return this;
  }

  verifyCartBadge(count) {
    cy.get(this.cartBadge).should('have.text', count);
    return this;
  }

  verifySorting(order) {
    // Verify items are sorted in specified order
    if (order === 'asc') {
      cy.get('[data-test="inventory-item-price"]').then((\) => {
        const prices = ...\].map((el) => parseFloat(el.innerText.replace('\$', '')));
        expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
      });
    }
    return this;
  }
}
