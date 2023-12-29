import {
  launchWebsite,
  selectOfficeProductline,
  navigateToSameTab,
  launchQAWebsite,
} from "../utils/common";

describe("Default Search Test Suit", function () {
  beforeEach(() => {
    // launchWebsite();
    launchQAWebsite()
    cy.wait(2000);
  });

  it("Selected_Office_Availibility", () => {
    selectOfficeProductline();
    //Click on Availibility from Sidebar
    cy.get("#mat-option-0 > .mat-option-text").click({ force: true });
  });

  it("TestCase_1_Office_Availability_Default_Search", function () {
    //Click on Search button
    cy.get(".mat-raised-button > .mat-button-wrapper").click();

    //no-result-message: Search results will be displayed here
    if (
      cy
        .get(".no-result-message")
        .should("contain", "Search results will be displayed here")
    ) {
      //Click on Search button
      cy.get(".mat-raised-button > .mat-button-wrapper").click({ force: true });
    }
    navigateToSameTab();

    //Click "FIRST Search result from list" button which triggers javascript's window.open() call
    cy.get("#k-grid0-r1c2 > .ref-no-link").click();
    // Make sure that it triggered window.open function call
    cy.get("@popup").should("be.called");
    //Click on BackSearchResult
    cy.get("#imglnkBackSearchResult").click();
  });

  it("TestCase_2_EXAMPLE_FAILED_TEST", function () {
    //SHOULD BE  FAILED - Click on Seacrh button
    cy.get("SHOULD.FAILED-TESTSTEPS.mat-raised > .mat-button-wrapper").click();

    navigateToSameTab();

    //Click "FIRST Search result from list" button which triggers javascript's window.open() call
    cy.get(
      ":nth-child(2) > .custom-address > :nth-child(1) > .search-address"
    ).click({ force: true });
    // Make sure that it triggered window.open function call
    cy.get("@popup").should("be.called");
    //Click on BackSearchResult
    cy.get("#imglnkBackSearchResult").click();
  });

  it("TestCase_3_Office_Property_Default_Search", () => {
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

  it("TestCase_4_Office_Transaction_Default_Search", () => {
    //Click on Transaction Menu
    cy.get(
      '.mat-nav-list > [protractor-name="menu_2"] > .mat-list-item > .mat-list-item-content'
    ).click();
    //Assert with URL
    cy.url().should('include',
      "/transaction-search"
    );

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
    cy.get("#k-grid0-r1c2 > .ref-no-link").click();
    // Make sure that it triggered window.open function call
    cy.get("@popup").should("be.called");
    //Click on BackSearchResult
    cy.get("#imglnkBackSearchResult").click();
  });
});
