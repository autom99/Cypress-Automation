let username = Cypress.env("username");
let password = Cypress.env("userPassword");

function navigateToSameTab() {
  // Get window object
  cy.window().then((win) => {
    // Replace window.open(url, target)-function with our own arrow function
    cy.stub(win, "open", (url) => {
      // change window location to be same as the popup url
      win.location.href = url;
    }).as("popup"); // alias it with popup, so we can wait refer it with @popup
  });
}

function launchWebsite() {
  cy.ntlm(["plus-dev.cbre.ca"], username, password);
  cy.ntlm([Cypress.env("baseApiUrl")], username, password);
  cy.visit(Cypress.env("baseUrl") + "Canada/UI");
  cy.url().should("eq", "https://plus-dev.cbre.ca/Canada/UI");
}

function launchQAWebsite() {
  cy.ntlm(["plus-qa.cbre.ca"], username, password);
  cy.ntlm([Cypress.env("qaApiUrl")], username, password);
  cy.visit(Cypress.env("qaUrl") + "Canada/UI");
  cy.url().should("eq", "https://plus-qa.cbre.ca/Canada/UI");
}

function selectOfficeProductline() {
  //Click on Productline Dropdown
  cy.get("span[class='mat-select-value-text ng-tns-c19-7 ng-star-inserted']").click({ force: true });
  //Click on Office Productline
  cy.get('.mat-option-text').contains(" OFFICE ").click();
}

function selectIndustrialProductline() {
  //Click on Productline Dropdown
  cy.get("span[class='mat-select-value-text ng-tns-c19-7 ng-star-inserted']").click({ force: true });
  //Click on Office Productline
  cy.get('.mat-option-text').contains(" INDUSTRIAL ").click();
}

export { navigateToSameTab, launchWebsite, launchQAWebsite, selectOfficeProductline, selectIndustrialProductline };