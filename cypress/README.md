# Automated Cypress tests for the sign-up process on Rekaz.io.

## Overview

This document outlines the steps to set up and run Cypress for automation of the sign-up process on Rekaz.io

## Installation

1. **Prerequisites:**
   - Ensure that [Node.js](https://nodejs.org/) and npm are installed on your machine.
   - Create a folder for the project. Open the project folder in a code editor (e.g., Visual Studio Code)

2. **Initialize Node.js Project:**
   - Navigate to the project's root directory in the code editor's terminal.
   - Run the following command to initialize a new Node.js project to create a `package.json file`:
   ```bash
   npm init
   ```

3. **Install Cypress:**
   - Navigate to the project's root directory in the code editor's terminal.
   - Run the following command to install Cypress as a development dependency:

     ```bash
     npm install cypress --save-dev
     ```

## Configuration

1. **Cypress Configuration File:**
   - The Cypress configuration is defined in `cypress.config.js`.
   - Key settings include:

     ```javascript
     const { defineConfig } = require("cypress");

    module.exports = defineConfig({
      e2e: {
          baseUrl: process.env.CYPRESS_BASE_URL || "https://rekaz.io/",
          viewportWidth: 1440,
          viewportHeight: 800,
          defaultCommandTimeout: 20000,
          watchForFileChanges: false,
          setupNodeEvents(on, config) {},
    },
  });

     ```

   - This configuration sets the base URL for tests, viewport dimensions, environment variables for URLs, and other parameters.

2. **Selectors Configuration:**
   - The selectors are stored in a JSON file (selectors.json) located in `cypress/fixtures` folder. This allows to manage and reuse selectors across multiple test files. It also helps to improve code readability.

## Creating Tests

1. **Test File Structure:**
   - Test file is located in the `cypress/e2e` folder.

## Running Cypress Tests Locally

### Using the Cypress Test Runner

1. **Open Cypress:**
   - Use the following command to open the Cypress Test Runner:

     ```bash
     npx cypress open
     ```

2. **Run Tests:**
   - In the Cypress Test Runner, click on a test file - `signUp.cy.js` to execute it.
