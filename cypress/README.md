# Cypress Sign-Up Automation for Rekaz.io

This repository contains automated **Cypress tests** for the **sign-up process** on **rekaz.io**. The tests aim to verify that users can sign up successfully by completing the required steps.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Test Structure](#test-structure)

## Prerequisites

Before running the tests, ensure that you have the following tools installed:

- [Node.js](https://nodejs.org/) (v12 or above)
- [Cypress](https://www.cypress.io/)

## Installation

1. Clone the repository by running: **git clone https://github.com/Fahizarh/Rekaz-Signup-Automation.git**
2. Navigate to the project directory by running: **cd directory**
3. Install dependencies by running: **npm install**
4. To run the Cypress tests, use the following command: **npx cypress open**
5. Select E2E Testing and select the spec name **signUp**
6. To run the tests headlessly, use: **npx cypress run**

## Test Structure
The tests are located in the **cypress/e2e** directory. The main test for the sign-up process can be found in the file **signUp.cy.js**
