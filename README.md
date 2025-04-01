# Cypress Cucumber Scalable Framework

This project is a scalable testing framework using Cypress and Cucumber for end-to-end testing. It follows a modular structure to ensure maintainability and scalability.

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
   git clone <repository-url>
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
├── e2e                     # Main test folder
│   ├── features            # Gherkin .feature files
│   │   ├── auth
│   │   │   └── login.feature
│   │   └── dashboard
│   │       └── dashboard.feature
│   └── step_definitions    # Step definitions for each feature
│       ├── auth
│       │   └── loginSteps.js
│       └── dashboard
│           └── dashboardSteps.js
├── fixtures                # Static test data (JSON, CSV, etc.)
│   └── users.json
├── pages                   # Page Object Model (POM) files
│   ├── loginPage.js
│   └── dashboardPage.js
├── support                 # Global config & reusable logic
│   ├── commands.js         # Custom Cypress commands
│   └── e2e.js              # Global imports (auto-loaded by Cypress)
├── utils                   # Utility functions (date, API, DB, etc.)
│   ├── dateUtils.js
│   ├── axiosClient.js
│   └── db.js
├── .env                    # Environment variables (optional)
├── cypress.config.js       # Cypress configuration file
├── package.json            # NPM scripts & dependencies
└── README.md               # Project documentation
```

---

## Folder Responsibilities

### `e2e/features/`

- Contains Gherkin `.feature` files that define test scenarios.
- Organized by feature or module (e.g., `auth`, `dashboard`).

### `e2e/step_definitions/`

- Contains JavaScript files that implement the steps defined in `.feature` files.
- Organized to match the structure of the `features` folder.

### `fixtures/`

- Stores static test data like JSON files, CSVs, or mock data.

### `pages/`

- Implements the Page Object Model (POM) pattern.
- Each file represents a page and contains selectors and reusable actions.

### `support/`

- `commands.js`: Custom Cypress commands.
- `e2e.js`: Global imports and setup logic (e.g., hooks, reusable logic).

### `utils/`

- Contains utility functions for non-Cypress-specific logic (e.g., date formatting, API calls, database queries).

### `.env`

- Optional file for managing environment variables like base URLs, tokens, etc.

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
  npx cypress run --spec "e2e/features/auth/login.feature"
  ```

- **Add new tests:**

  - Create a `.feature` file in the `features` folder.
  - Add corresponding step definitions in the `step_definitions` folder.

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