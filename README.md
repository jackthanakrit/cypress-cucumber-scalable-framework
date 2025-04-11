# Cypress Cucumber Scalable Framework

This project is a scalable testing framework using Cypress and Cucumber for end-to-end testing. It follows a modular structure to ensure maintainability and scalability.

## Allure Report

The test results are available as an Allure Report. You can view the latest report [here](https://jackthanakrit.github.io/cypress-cucumber-scalable-framework/).

---

## Table of Contents

- [Setup](#setup)
- [Folder Structure](#folder-structure)
- [Folder Responsibilities](#folder-responsibilities)
- [Usage](#usage)
- [Contributing](#contributing)

---

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/jackthanakrit/cypress-cucumber-scalable-framework.git
   cd cypress-cucumber-scalable-framework
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the root directory.
   - Add necessary variables like `BASE_URL`, `API_KEY`, etc.

4. Run tests:

   ```bash
   npx cypress open
   ```

---

## Folder Structure

```plaintext
.
├── cypress
│   ├── e2e                            # All your tests
│   │   └── features                   # Gherkin feature files and step definitions
│   │       ├── auth
│   │       │   ├── login.feature
│   │       │   └── login.js           # Paired step definitions (same filename)
│   │       ├── dashboard
│   │       │   ├── dashboard.feature
│   │       │   └── dashboard.js
│   │       └── cart
│   │           ├── cart.feature
│   │           └── cart.js
│   ├── fixtures                       # Static test data (JSON, etc.)
│   │   └── users.json
│   ├── pages                          # Page Object Models (POM)
│   │   ├── loginPage.js
│   │   ├── dashboardPage.js
│   │   └── cartPage.js
│   ├── support
│   │   ├── commands.js                # Custom Cypress commands (e.g., cy.login())
│   │   └── e2e.js                     # Auto-loaded before each test run
│   └── utils                          # Pure JS helpers (no cy.* usage)
│       ├── axiosClient.js
│       ├── dateUtils.js
│       └── db.js
├── .env                               # Optional env variables (baseUrl, credentials)
├── .gitignore                         # Ignore node_modules, videos, screenshots
├── cypress.config.js                  # Cypress config (plugin setup, baseUrl, etc.)
├── package.json                       # NPM scripts, dependencies
├── README.md                          # Project documentation
└── node_modules/                      # Installed dependencies
```

---

## Folder Responsibilities

### `cypress/e2e/features/`

- Contains all test files, including `.feature` files and their paired step definitions.
- Organized by feature or module (e.g., `auth`, `dashboard`, `cart`).

### `cypress/fixtures/`

- Stores static test data like JSON files or mock data.

### `cypress/pages/`

- Implements the Page Object Model (POM) pattern.
- Each file represents a page and contains selectors and reusable actions.

### `cypress/support/`

- `commands.js`: Custom Cypress commands (e.g., `cy.login()`).
- `e2e.js`: Global imports and setup logic (e.g., hooks, reusable logic).

### `cypress/utils/`

- Contains utility functions for non-Cypress-specific logic (e.g., API calls, date formatting, database queries).

### `.env`

- Optional file for managing environment variables like base URLs, tokens, etc.

### `.gitignore`

- Specifies files and directories to be ignored by Git (e.g., `node_modules`, videos, screenshots).

### `cypress.config.js`

- Configuration file for Cypress settings and plugins.

---

## Usage

- **Run all tests in headless mode:**

  ```bash
  npx cypress run
  ```

- **Run specific feature file:**

  ```bash
  npx cypress run --spec "cypress/e2e/features/auth/login.feature"
  ```

- **Add new tests:**

  - Create a `.feature` file in the `e2e/features` folder based on the feature (e.g., login tests should be in `auth/*.feature`).
  - Add corresponding step definitions in the same folder with the same filename (e.g., `auth/login.js` for `auth/login.feature`).

---

## Contributing

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your message here"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request.

---

## Best Practices

- Keep `.feature` files simple and readable.
- Reuse step definitions wherever possible.
- Follow the Page Object Model for maintainable selectors and actions.
- Use the `utils` folder for non-Cypress-specific logic.
- Keep test data in the `fixtures` folder for easy updates.
