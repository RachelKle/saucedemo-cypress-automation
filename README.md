# SauceDemo Cypress Automation Framework

## 📋 Overview
This is a comprehensive Cypress automation framework for testing the **SauceDemo** web application (https://www.saucedemo.com). The framework follows the **Page Object Model (POM)** pattern for maintainability and scalability.

## 🛠️ Tech Stack
- **Cypress** - E2E Testing Framework
- **JavaScript (ES6+)** - Programming Language
- **Page Object Model** - Design Pattern
- **Fixture Files** - Test Data Management

## 📁 Project Structure
`
cypress/
├── e2e/                           # Test Suites
│   ├── login.cy.js               # Login test scenarios
│   ├── inventory.cy.js           # Inventory/Product tests
│   └── checkout.cy.js            # Checkout flow tests
│
├── pages/                         # Page Object Models
│   ├── LoginPage.js              # Login page interactions
│   ├── InventoryPage.js          # Inventory page interactions
│   └── CheckoutPage.js           # Checkout page interactions
│
├── fixtures/                      # Test Data
│   └── users.json                # User credentials & test data
│
└── support/                       # Custom Commands & Setup
    ├── commands.js               # Custom Cypress commands
    └── e2e.js                    # Global test setup
`

## ✅ Test Coverage
### Login Tests
- ✓ Valid credentials login
- ✓ Invalid credentials error handling

### Inventory Tests
- ✓ Display inventory items
- ✓ Add items to cart
- ✓ Sort items by price

### Checkout Tests
- ✓ Complete checkout process
- ✓ Cancel checkout flow

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Install Dependencies
`ash
npm install
`

## 🏃 Running Tests

### Open Cypress Test Runner
`ash
npm run cypress:open
`

### Run Tests in Headless Mode
`ash
npm run cypress:run
`

### Run Specific Test File
`ash
npx cypress run --spec "cypress/e2e/login.cy.js"
`

### Run Tests with Chrome Browser
`ash
npx cypress run --browser chrome
`

## 📦 Custom Commands

### Login Command
`javascript
cy.login('standard_user', 'secret_sauce');
`

### Add to Cart Command
`javascript
cy.addToCart(0); // Add first item to cart
`

### Go to Cart Command
`javascript
cy.goToCart();
`

### Verify Error Command
`javascript
cy.verifyError('Epic sadface');
`

## 👤 Test User Credentials
From cypress/fixtures/users.json:
- **Username:** standard_user
- **Password:** secret_sauce

## 📊 Test Data Structure
`json
{
  "validUsers": [...],
  "invalidUsers": [...],
  "testData": {
    "firstName": "Rachel",
    "lastName": "Klein",
    "postalCode": "12345"
  }
}
`

## 🔧 Configuration
See cypress.config.js for:
- Base URL configuration
- Viewport settings
- Timeout configurations
- Plugin setup

## 🎯 Page Object Model Pattern
Each page object class contains:
- **Selectors** - CSS/XPath element selectors
- **Actions** - Methods for user interactions
- **Assertions** - Methods for verification

### Example (LoginPage.js)
`javascript
export class LoginPage {
  usernameInput = '[data-test="username"]';
  
  fillUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }
}
`

## 📝 Best Practices Implemented
- ✓ Page Object Model for reusability
- ✓ Data-driven testing with fixtures
- ✓ Custom commands for common actions
- ✓ Descriptive test names
- ✓ Chainable methods for readability
- ✓ Proper wait strategies

## 🐛 Debugging Tips
`ash
# Run with debug mode
DEBUG=cypress:* npm run cypress:run

# Run with verbose logging
npm run cypress:run --log-level verbose
`

## 📚 Resources
- [Cypress Documentation](https://docs.cypress.io)
- [SauceDemo Website](https://www.saucedemo.com)
- [Page Object Model Pattern](https://docs.cypress.io/guides/references/best-practices)

## 👨‍💼 Author
**Raquel Klepache** - Automation QA Engineer

## 📄 License
MIT
