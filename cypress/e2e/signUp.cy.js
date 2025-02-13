describe("Sign Up Process Automation with Cypress", () => {
  beforeEach(() => {
    cy.visit("/"); // Starts at the main domain (https://rekaz.io)
  });

  // Prevent Cypress from failing due to application errors
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  // Automation of Sign Up Process
  it("Sign Up Process", () => {
    cy.fixture("selectors").then((selectors) => {
      cy.get(selectors.tryRekazButton).click();

      // Handle navigation to a new origin
      cy.origin("https://platform.rekaz.io/Account/Register", () => {
        cy.fixture("selectors").then((selectors) => {
          cy.get(selectors.continueRegistrationButton).click();
          cy.get(selectors.fullNameField).type(selectors.testData.fullName);
          cy.get(selectors.emailAddressField).type(
            selectors.testData.emailAddress
          );
          cy.get(selectors.phoneNumberField).type(
            selectors.testData.phoneNumber
          );
          cy.get(selectors.passwordField).type(selectors.testData.password);
          cy.get(selectors.registrationButton).click();

          // Business Information
          cy.get(selectors.businessNameField).type(
            selectors.testData.businessName
          );
          cy.contains(selectors.testData.employeesNo).click();
          cy.get(selectors.nextButton).click();
          cy.contains(selectors.testData.service).click(); // Service rendered - Gym
          cy.get(selectors.serviceNameField).type(
            selectors.testData.packageName
          );
          cy.get(selectors.servicePrice).type(selectors.testData.price);
          cy.get(selectors.billingDropdown).click();
          cy.contains(
            selectors.billingOption,
            selectors.testData.billing
          ).click({
            force: true,
          });
          cy.get(selectors.submitButton).click();
        });
      });
    });
  });
});
