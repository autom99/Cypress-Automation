import { navigateToSameTab, launchWebsite, selectOfficeProductline, launchQAWebsite, } from "../../../utils/common";

describe("Office Property Search Tests", () => {
  beforeEach(function () {
    // launchWebsite();
    launchQAWebsite()
    selectOfficeProductline();
    //Click on Property from Sidebar
    cy.get('.mat-nav-list > [protractor-name="menu_1"] > .mat-list-item > .mat-list-item-content').click();
  });
  it("Office Property Default Search", () => {
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
  it("Office_Property_Clearallfilters_Search", () => {
    //Click On 3 Dots At top right
    cy.get(
      "button[class='mobile-search-option mat-menu-trigger mat-icon-button mat-button-base']"
    ).click();
    //Click on Clear All
    cy.get(".mat-menu-content > :nth-child(1)").click();
    //Click On 3 Dots At top right
    cy.get(".mat-button-wrapper").contains("more_vert").click({ force: true });
    //Click on Set As Default
    cy.get(".mat-menu-content > :nth-child(2)").click();
  });
  it("Office_Property_City_Toronto_Search", () => {
    //type city name
    cy.get("#mat-chip-list-input-12").type("Toronto");
    //click on Search
    cy.get(".mat-raised-button").click();
    //click on City header
    cy.get("div[class='ngx-ellipsis-inner']").contains("City").click({force:true});
    //Assert CityToronto
    cy.get('#k-grid0-r1c4').should("have.text", "Toronto")
  });
  it("Office_Property_Address_Search", () => {
    //type Address name
    cy.get("input[protractor-name='address']").type("1 Hobin Street");
    //click on Search
    cy.get(".mat-raised-button").click();
    //Assert Address name
    cy.get('#k-grid0-r1c2 > .ref-no-link').should("include.text", "1 Hobin Street")
  });
  it("Office_Property_Market_Search", () => {
    //type Market name
  cy.get("input[name='marketMultiSelect']").type("Calgary")
    //click On AB>Calgary
    cy.get("span[class='mat-option-text']").contains(" AB > Calgary > Downtown > Central Core - South ").click();
    //click on Search
    cy.get(".mat-raised-button").click();
    //Assert Market name
    cy.get('#k-grid0-r1c3 > .hasTooltip > .overflow-cell').should("have.text", "Central Core - South")
  });
  it("Office_Property_BuildingPhysicalStatus_Demolished_Search", () => {
    //Click on building Physical Status
    cy.get("mat-label[class='search-chip-label ng-star-inserted']").contains(" Building Physical Status ").click({force:true});
    //click On Demolished
    cy.get('#mat-option-171 > .mat-option-text').click();
    //click on Search
    cy.get(".mat-raised-button").click({force:true});
    //Assert BuildingPhysicalStatus_Demolished
    cy.get('#k-grid0-r1c5').should("have.text", " Demolished");
    //Click on BuildingPhysicalStatus Header
    cy.get('#k-grid0-r0c5 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
    //Assert BuildingPhysicalStatus_Demolished after sorting
    cy.get("#k-grid0-r1c5").should("have.text", " Demolished");
    //Click on BuildingPhysicalStatus Header
    cy.get('#k-grid0-r0c5 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
    //Assert BuildingPhysicalStatus_Demolished after sorting
    cy.get("#k-grid0-r1c5").should("have.text", " Demolished");
  });
  it("Office_Property_BuildingClass_A_Search", () => {
    //Click on BuildingClass 
    cy.get("span[class='mat-form-field-label-wrapper']").contains(" Building Class ").click({force:true});
    //click On A
    cy.get("span[class='mat-option-text']").contains(" A ").click();
    //click on Search
    cy.get(".mat-raised-button").click({force:true});
    //Assert BuildingClass_A
    cy.get('#k-grid0-r1c6').should("have.text", " A ");
    //Click on BuildingClass Header
    cy.get('#k-grid0-r0c6 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
    //Assert BuildingClass_A sorting
    cy.get("#k-grid0-r1c6").should("have.text", " A ");
    //Click on BuildingClass Header
    cy.get('#k-grid0-r0c6 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
    //Assert BuildingClass_A after sorting
    cy.get("#k-grid0-r1c6").should("have.text", " A ");
  });
  it("Office_Property_TotalBuildingSize_Search", () => {
    //enter Value in From
    cy.get("input[protractor-name='fromTotalBuildingSize']").type("1000");
    //enter Value in To
    cy.get("input[protractor-name='toTotalBuildingSize']").type("6000");
    //Click On Search button
  cy.get(".mat-raised-button").click();
//         if(cy.get("label[class='filter-value ng-star-inserted']").should("contain"," 1,000 "))
// {
//     cy.get(".mat-raised-button").click({ force: true });
// }
   
    //Click on TotalBuildingSize Header
    cy.get('#k-grid0-r0c10 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
    //Assert  TotalBuildingSize
    cy.get('#k-grid0-r1c10').should("have.text", " 1,000 sq. ft. ");
    //Click on TotalBuildingSize Header
    cy.get('#k-grid0-r0c10 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
    //Assert  TotalBuildingSize
    cy.get('#k-grid0-r1c10').should("have.text", " 6,000 sq. ft. ");
});
});
