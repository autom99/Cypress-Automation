import { navigateToSameTab, launchWebsite, launchQAWebsite } from "../../../../utils/common";

describe("OfficeAvailabilitySearch", () => {
    beforeEach(function () {
        // launchWebsite();
        launchQAWebsite()
    });

    it("Select_Office_Availability", () => {
        //Click on Productline Dropdown
        cy.get("span[class='mat-select-value-text ng-tns-c19-7 ng-star-inserted']").click({ force: true });
        //Click on Office Productline
        cy.get('.mat-option-text').contains(" OFFICE ").click();
        //click on Availability 
        cy.get('.mat-nav-list > [protractor-name="menu_0"] > .mat-list-item > .mat-list-item-content').click();

    });
    it("Office_Availability_Clearallfilters_Search", () => {
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

    it("Office_Availability_Company/Contacts_InfoSource_Search", () => {
        //Click OnCompany/Contacts tab
        cy.get('#mat-tab-label-0-4 > .mat-tab-label-content').click();
        //Enter text in InfoSource
        cy.get('#mat-input-41').type('Richard Pillon')
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on InfoSource Checkbox
        cy.get(".mat-checkbox-label").contains(" Info Source ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert Info Source 
        cy.get('#k-grid0-r1c22').should("include.text", "Richard Pillon-(1196833 Ontario Inc)");
        //Click on Info Source Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Info Source 
        cy.get('#k-grid0-r1c22').should("include.text", "Richard Pillon-(1196833 Ontario Inc)");
        //Click on Info Source Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Info Source 
        cy.get('#k-grid0-r1c22').should("include.text", "Richard Pillon-(1196833 Ontario Inc)");

    });
    it("Office_Availability_Company/Contacts_Lessee_Search", () => {
        //Click OnCompany/Contacts tab
        cy.get('#mat-tab-label-0-4 > .mat-tab-label-content').click();
        //Enter text in Lessee
        cy.get('#mat-input-42').type('Luke Slabczynski')
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Lessee Checkbox
        cy.get(".mat-checkbox-label").contains(" Lessee ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert Lessee
        cy.get('#k-grid0-r1c22').should("include.text", "Luke Slabczynski-(CBRE Limited, Canada)");
        //Click on Lessee Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Lessee 
        cy.get('#k-grid0-r1c22').should("include.text", "Luke Slabczynski-(CBRE Limited, Canada)");
        //Click on Lessee Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Lessee
        cy.get('#k-grid0-r1c22').should("include.text", "Luke Slabczynski-(CBRE Limited, Canada)");

    });
    it("Office_Availability_Company/Contacts_ListingBroker_Search", () => {
        //Click OnCompany/Contacts tab
        cy.get('#mat-tab-label-0-4 > .mat-tab-label-content').click();
        //Enter text in ListingBroker
        cy.get('#mat-input-43').type('Matt Virgini')
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Assert ListingBroker
        cy.get('#k-grid0-r1c12').should("include.text", "Matt Virgini-(Triovest Realty Advisors Inc.,)");
        //Click on ListingBroker Header
        cy.get('#k-grid0-r0c12 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert ListingBroker
        cy.get('#k-grid0-r1c12').should("include.text", "Matt Virgini-(Triovest Realty Advisors Inc.,)");
        //Click on ListingBroker Header
        cy.get('#k-grid0-r0c12 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert ListingBroker
        cy.get('#k-grid0-r1c12').should("include.text", "Matt Virgini-(Triovest Realty Advisors Inc.,)");

    });
    it("Office_Availability_Company/Contacts_Other_Search", () => {
        //Click OnCompany/Contacts tab
        cy.get('#mat-tab-label-0-4 > .mat-tab-label-content').click();
        //Enter text in Other
        cy.get('#mat-input-44').type('ABC Plastics Moulding')
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Other Checkbox
        cy.get(".mat-checkbox-label").contains(" Other ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert Other
        cy.get('#k-grid0-r1c22').should("include.text", "ABC Plastics Moulding");
        //Click on Other Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Other
        cy.get('#k-grid0-r1c22').should("include.text", "ABC Plastics Moulding");
        //Click on Other Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Other
        cy.get('#k-grid0-r1c22').should("include.text", "ABC Plastics Moulding");

    });
    it("Office_Availability_Company/Contacts_Owner_Search", () => {
        //Click OnCompany/Contacts tab
        cy.get('#mat-tab-label-0-4 > .mat-tab-label-content').click();
        //Enter text in Owner
        cy.get('#mat-input-45').type('Lance Babcock Investments Limited')
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
    it("Office_Availability_Company/Contacts_PropertyManagement_Search", () => {
        //Click OnCompany/Contacts tab
        cy.get('#mat-tab-label-0-4 > .mat-tab-label-content').click();
        //Enter text in PropertyManagement
        cy.get('#mat-input-46').type('Triovest Realty Advisors Inc')
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on PropertyManagement Checkbox
        cy.get(".mat-checkbox-label").contains(" Property Management ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert  Property Management 
        cy.get('#k-grid0-r1c22').should("include.text", "Triovest Realty Advisors Inc.,");


    });
    it("Office_Availability_Company/Contacts_Purchaser_Search", () => {
        //Click OnCompany/Contacts tab
        cy.get('#mat-tab-label-0-4 > .mat-tab-label-content').click();
        //Enter text in Purchaser
        cy.get('#mat-input-47').type('Rabcon Contractors Ltd.')
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Purchaser Checkbox
        cy.get(".mat-checkbox-label").contains(" Purchaser ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert Purchaser 
        cy.get('#k-grid0-r1c22').should("include.text", "Rabcon Contractors Ltd.");
        //Click on Purchaser Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Purchaser 
        cy.get('#k-grid0-r1c22').should("include.text", "Rabcon Contractors Ltd.");
        //Click on Purchaser Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Purchaser
        cy.get('#k-grid0-r1c22').should("include.text", "Rabcon Contractors Ltd.");

    });
    it("Office_Availability_Company/Contacts_SellingBroker_Search", () => {
        //Click OnCompany/Contacts tab
        cy.get('#mat-tab-label-0-4 > .mat-tab-label-content').click();
        //Enter text in SellingBroker
        cy.get('#mat-input-48').type('Laura Leano')
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on SellingBroker Checkbox
        cy.get(".mat-checkbox-label").contains(" Selling Broker ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert SellingBroker 
        cy.get('#k-grid0-r1c22').should("include.text", "Laura Leano-(Avison Young)");
        //Click onSellingBroker Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert SellingBroker 
        cy.get('#k-grid0-r1c22').should("include.text", "Laura Leano-(Avison Young)");
        //Click on SellingBroker Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert SellingBroker
        cy.get('#k-grid0-r1c22').should("include.text", "Laura Leano-(Avison Young)");

    });
    it("Office_Availability_Company/Contacts_Sublessor_Search", () => {
        //Click OnCompany/Contacts tab
        cy.get('#mat-tab-label-0-4 > .mat-tab-label-content').click();
        //Enter text in Sublessor
        cy.get('#mat-input-49').type('Mark Gazda')
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Sublessor Checkbox
        cy.get(".mat-checkbox-label").contains(" Sublessor ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert Sublessor
        cy.get('#k-grid0-r1c22').should("include.text", "Mark Gazda-(1616892 Ontario Inc.)");
        //Click on Sublessor Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Sublessor
        cy.get('#k-grid0-r1c22').should("include.text", "Mark Gazda-(1616892 Ontario Inc.)");
        //Click on Sublessor Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Sublessor
        cy.get('#k-grid0-r1c22').should("include.text", "Mark Gazda-(1616892 Ontario Inc.)");

    });

});