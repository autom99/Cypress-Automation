import { navigateToSameTab, launchWebsite, selectIndustrialProductline, launchQAWebsite, } from "../../../utils/common";

describe("Industrial Property Search Tests", () => {
  beforeEach(function () {
    // launchWebsite();
    launchQAWebsite()
  });

  it("Select_Industrial_Property", () => {
    selectIndustrialProductline();
    //Click on Property from Sidebar
    cy.get('.mat-nav-list > [protractor-name="menu_1"] > .mat-list-item > .mat-list-item-content').click();
  });

  it("Industrial Property Default Search", () => {
    //Click on Property Menu
    cy.get(
      '.mat-nav-list > [protractor-name="menu_1"] > .mat-list-item > .mat-list-item-content'
    ).click();
    //Assert with URL
    cy.url().should('include', '/property-search')
    //Click on Search button
    cy.get(".mat-raised-button > .mat-button-wrapper").click();

    //no-result-message: Search results will be displayed here
    if (
      cy
        .get(".no-result-message")
        .should("contain", "Search results will be displayed here")
    ) {
      //AGAIN Click on Search button
      cy.get(".mat-raised-button > .mat-button-wrapper").click({ force: true });
    }
    navigateToSameTab();

    //Click "FIRST Search result from list" button which triggers javascript's window.open() call
    cy.get("#k-grid0-r1c2 > .ref-no-link").click({ force: true });
    // Make sure that it triggered window.open function call
    cy.get("@popup").should("be.called");
    //Click on BackSearchResult
    cy.get("#imglnkBackSearchResult").click();
  });


});
