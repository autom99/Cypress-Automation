import { navigateToSameTab, launchWebsite, selectOfficeProductline, launchQAWebsite, } from "../../../../utils/common";

describe("Office Property Search Tests", () => {
  beforeEach(function () {
    // launchWebsite();
    launchQAWebsite()
    selectOfficeProductline();
    //cy.wait(3000)
    //Click on Property from Sidebar
    cy.get('.mat-nav-list > [protractor-name="menu_1"] > .mat-list-item > .mat-list-item-content').click();
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

  it("Office_Property_Company/Contacts_InfoSource_Search", () => {
       //click on side arrow 
       cy.get('.mat-tab-header-pagination-after').click({ force: true });
    //Click OnCompany/Contacts tab
    cy.get('#mat-tab-label-1-3').click();
    //Enter text in InfoSource
    cy.get('#mat-input-103').type('Richard Pillon')
    //Click On Search button
    cy.get(".mat-raised-button").click({ force: true });
    //Click on Column + Button
    cy.get(".search-column-button").click({ force: true });
    //Click on InfoSource Checkbox
    cy.get(".mat-checkbox-label").contains(" Info Source ").click({ force: true });
    //Click on Apply Button
    cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
    //Assert Info Source 
    cy.get('#k-grid0-r1c27').should("include.text", "Richard Pillon-(1196833 Ontario Inc)");
    //Click on Info Source Header
    cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert Info Source 
    cy.get('#k-grid0-r1c27').should("include.text", "Richard Pillon-(1196833 Ontario Inc)");
    //Click on Info Source Header
    cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert Info Source 
    cy.get('#k-grid0-r1c27').should("include.text", "Richard Pillon-(1196833 Ontario Inc)");

});
it("Office_Property_Company/Contacts_Lessee_Search", () => {
    //click on side arrow 
    cy.get('.mat-tab-header-pagination-after').click({ force: true });
    //Click OnCompany/Contacts tab
    cy.get('#mat-tab-label-1-3').click();
    //Enter text in Lessee
    cy.get('#mat-input-104').type('Luke Slabczynski')
    //Click On Search button
    cy.get(".mat-raised-button").click({ force: true });
    //Click on Column + Button
    cy.get(".search-column-button").click({ force: true });
    //Click on Lessee Checkbox
    cy.get(".mat-checkbox-label").contains(" Lessee ").click({ force: true });
    //Click on Apply Button
    cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
    //Assert Lessee
    cy.get('#k-grid0-r1c27').should("include.text", "Luke Slabczynski-(CBRE Limited, Canada)");
    //Click on Lessee Header
    cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert Lessee 
    cy.get('#k-grid0-r1c27').should("include.text", "Luke Slabczynski-(CBRE Limited, Canada)");
    //Click on Lessee Header
    cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert Lessee
    cy.get('#k-grid0-r1c27').should("include.text", "Luke Slabczynski-(CBRE Limited, Canada)");

});
it("Office_Poperty_Company/Contacts_ListingBroker_Search", () => {
    //click on side arrow 
    cy.get('.mat-tab-header-pagination-after').click({ force: true });
    //Click OnCompany/Contacts tab
    cy.get('#mat-tab-label-1-3').click();
    //Enter text in ListingBroker
    cy.get('#mat-input-105').type('Matt Virgini')
    //Click On Search button
    cy.get(".mat-raised-button").click({ force: true });
    //Assert ListingBroker
    cy.get('#k-grid0-r1c19').should("include.text", "Matt Virgini-(Triovest Realty Advisors Inc.,)");
    //Click on ListingBroker Header
    cy.get('#k-grid0-r0c19 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert ListingBroker
    cy.get('#k-grid0-r1c19').should("include.text", "Matt Virgini-(Triovest Realty Advisors Inc.,)");
    //Click on ListingBroker Header
    cy.get('#k-grid0-r0c19 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert ListingBroker
    cy.get('#k-grid0-r1c19').should("include.text", "Matt Virgini-(Triovest Realty Advisors Inc.,)");

});
it("Office_Property_Company/Contacts_Other_Search", () => {
    //click on side arrow 
    cy.get('.mat-tab-header-pagination-after').click({ force: true });
    //Click OnCompany/Contacts tab
    cy.get('#mat-tab-label-1-3').click();
    //Enter text in Other
    cy.get('#mat-input-106').type('ABC Plastics Moulding')
    //Click On Search button
    cy.get(".mat-raised-button").click({ force: true });
    //Click on Column + Button
    cy.get(".search-column-button").click({ force: true });
    //Click on Other Checkbox
    cy.get(".mat-checkbox-label").contains(" Other ").click({ force: true });
    //Click on Apply Button
    cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
    //Assert Other
    cy.get('#k-grid0-r1c27').should("include.text", "ABC Plastics Moulding");
    //Click on Other Header
    cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert Other
    cy.get('#k-grid0-r1c27').should("include.text", "ABC Plastics Moulding");
    //Click on Other Header
    cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert Other
    cy.get('#k-grid0-r1c27').should("include.text", "ABC Plastics Moulding");

});
it("Office_Property_Company/Contacts_Owner_Search", () => {
    //click on side arrow 
    cy.get('.mat-tab-header-pagination-after').click({ force: true });
    //Click OnCompany/Contacts tab
    cy.get('#mat-tab-label-1-3').click();
    //Enter text in Owner
    cy.get('#mat-input-107').type('Lance Babcock Investments Limited')
    //Click On Search button
    cy.get(".mat-raised-button").click({ force: true });
    //Assert Owner
    cy.get('#k-grid0-r1c21').should("include.text", "Lance Babcock Investments Limited");
    //Click on Owner Header
    cy.get('#k-grid0-r0c21 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert Owner
    cy.get('#k-grid0-r1c21').should("include.text", "Lance Babcock Investments Limited");
    //Click on Owner Header
    cy.get('#k-grid0-r0c21 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert Owner
    cy.get('#k-grid0-r1c21').should("include.text", "Lance Babcock Investments Limited");

});
it("Office_Property_Company/Contacts_PropertyManagement_Search", () => {
    //click on side arrow 
    cy.get('.mat-tab-header-pagination-after').click({ force: true });
    //Click OnCompany/Contacts tab
    cy.get('#mat-tab-label-1-3').click();
    //Enter text in PropertyManagement
    cy.get('#mat-input-108').type('Triovest Realty Advisors Inc')
    //Click On Search button
    cy.get(".mat-raised-button").click({ force: true });
    //Assert  Property Management 
    cy.get('#k-grid0-r1c20').should("include.text", "Triovest Realty Advisors Inc.,");
    //Click On Property Manager Header
    cy.get('#k-grid0-r0c20 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert  Property Management 
    cy.get('#k-grid0-r1c20').should("include.text", "Triovest Realty Advisors Inc.,");
    //Click On Property Manager Header
    cy.get('#k-grid0-r0c20 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert  Property Management 
    cy.get('#k-grid0-r1c20').should("include.text", "Triovest Realty Advisors Inc.,");

});
it("Office_Property_Company/Contacts_Purchaser_Search", () => {
    //click on side arrow 
    cy.get('.mat-tab-header-pagination-after').click({ force: true });
    //Click OnCompany/Contacts tab
    cy.get('#mat-tab-label-1-3').click();
    //Enter text in Purchaser
    cy.get('#mat-input-109').type('Rabcon Contractors Ltd.')
    //Click On Search button
    cy.get(".mat-raised-button").click({ force: true });
    //Click on Column + Button
    cy.get(".search-column-button").click({ force: true });
    //Click on Purchaser Checkbox
    cy.get(".mat-checkbox-label").contains(" Purchaser ").click({ force: true });
    //Click on Apply Button
    cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
    //Assert Purchaser 
    cy.get('#k-grid0-r1c27').should("include.text", "Rabcon Contractors Ltd.");
    //Click on Purchaser Header
    cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert Purchaser 
    cy.get('#k-grid0-r1c27').should("include.text", "Rabcon Contractors Ltd.");
    //Click on Purchaser Header
    cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert Purchaser
    cy.get('#k-grid0-r1c27').should("include.text", "Rabcon Contractors Ltd.");

});
it("Office_Property_Company/Contacts_SellingBroker_Search", () => {
   //click on side arrow 
   cy.get('.mat-tab-header-pagination-after').click({ force: true });
    //Click OnCompany/Contacts tab
    cy.get('#mat-tab-label-1-3').click();
    //Enter text in SellingBroker
    cy.get('#mat-input-110').type('Laura Leano')
    //Click On Search button
    cy.get(".mat-raised-button").click({ force: true });
    //Click on Column + Button
    cy.get(".search-column-button").click({ force: true });
    //Click on SellingBroker Checkbox
    cy.get(".mat-checkbox-label").contains(" Selling Broker ").click({ force: true });
    //Click on Apply Button
    cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
    //Assert SellingBroker 
    cy.get('#k-grid0-r1c27').should("include.text", "Laura Leano-(Avison Young)");
    //Click onSellingBroker Header
    cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert SellingBroker 
    cy.get('#k-grid0-r1c27').should("include.text", "Laura Leano-(Avison Young)");
    //Click on SellingBroker Header
    cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert SellingBroker
    cy.get('#k-grid0-r1c27').should("include.text", "Laura Leano-(Avison Young)");

});
it("Office_Property_Company/Contacts_Sublessor_Search", () => {
    //click on side arrow 
    cy.get('.mat-tab-header-pagination-after').click({ force: true });
    //Click OnCompany/Contacts tab
    cy.get('#mat-tab-label-1-3').click();
    //Enter text in Sublessor
    cy.get('#mat-input-111').type('Mark Gazda')
    //Click On Search button
    cy.get(".mat-raised-button").click({ force: true });
    //Click on Column + Button
    cy.get(".search-column-button").click({ force: true });
    //Click on Sublessor Checkbox
    cy.get(".mat-checkbox-label").contains(" Sublessor ").click({ force: true });
    //Click on Apply Button
    cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
    //Assert Sublessor
    cy.get('#k-grid0-r1c27').should("include.text", "Mark Gazda-(1616892 Ontario Inc.)");
    //Click on Sublessor Header
    cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert Sublessor
    cy.get('#k-grid0-r1c27').should("include.text", "Mark Gazda-(1616892 Ontario Inc.)");
    //Click on Sublessor Header
    cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
    //Assert Sublessor
    cy.get('#k-grid0-r1c27').should("include.text", "Mark Gazda-(1616892 Ontario Inc.)");

});

  
});
