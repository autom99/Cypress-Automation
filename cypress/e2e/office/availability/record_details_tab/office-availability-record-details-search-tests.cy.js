import { navigateToSameTab, launchWebsite, launchQAWebsite } from "../../../../utils/common";

describe("OfficeAvailabilitySearch", () => {
    beforeEach(function () {
        // launchWebsite();
        launchQAWebsite();
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
    it("Office_Availability_RecordDetails_CreatedDate_Search", () => {
        //Click On RecordDetails tab
        cy.get('#mat-tab-label-0-5 > .mat-tab-label-content').click();
        //Click On from 
        cy.get('#mat-input-8').click()
        cy.get('#mat-input-8').click({ force: true })
        //Enter From Date
        cy.get('#mat-input-8').type("12/01/2022")
        //Click On To 
        cy.get('#mat-input-9').click({ force: true })
        cy.get('#mat-input-9').click({ force: true })
        //Enter To Date
        cy.get('#mat-input-9').type("12/01/2023")
        // Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on CreatedDate Checkbox
        cy.get(".mat-checkbox-label").contains(" Created Date ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on  Created Date  Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert  Created Date 
        cy.get('#k-grid0-r1c22').should("include.text", " Jan 12, 2022");
        //Click on  Created Date  Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert  Created Date 
        cy.get('#k-grid0-r1c22').should("include.text", " Jan 5, 2023", " Jan 12, 2023");

    });

    it("Office_Availability_RecordDetails_LastUpdated_Search", () => {
        //Click On RecordDetails tab
        cy.get('#mat-tab-label-0-5 > .mat-tab-label-content').click();
        //Click On from 
        cy.get('#mat-input-10').click()
        cy.get('#mat-input-10').click({ force: true })
        //Enter From Date
        cy.get('#mat-input-10').type("12/01/2022")
        //Click On To 
        cy.get('#mat-input-11').click({ force: true })
        cy.get('#mat-input-11').click({ force: true })
        //Enter To Date
        cy.get('#mat-input-11').type("12/01/2023")
        // Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Last Updated Checkbox
        cy.get(".mat-checkbox-label").contains(" Last Updated ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on Last Updated Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Last Updated 
        cy.get('#k-grid0-r1c22').should("include.text", "Jan 12, 2022");
        //Click on Last Updated Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Last Updated 
        cy.get('#k-grid0-r1c22').should("include.text", "Jan 11, 2023", "Jan 12, 2023");

    });

    it("Office_Availability_RecordDetails_StatusUpdated_Search", () => {
        //Click On RecordDetails tab
        cy.get('#mat-tab-label-0-5 > .mat-tab-label-content').click();
        //Click On from 
        cy.get('#mat-input-12').click()
        cy.get('#mat-input-12').click({ force: true })
        //Enter From Date
        cy.get('#mat-input-12').type("12/01/2022")
        //Click On To 
        cy.get('#mat-input-13').click({ force: true })
        cy.get('#mat-input-13').click({ force: true })
        //Enter To Date
        cy.get('#mat-input-13').type("12/01/2023")
        // Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Status Updated Checkbox
        cy.get(".mat-checkbox-label").contains(" Status Updated ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on Status Updated Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Status Updated 
        cy.get('#k-grid0-r1c22').should("include.text", "Jan 12, 2022");
        //Click on Status Updated Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Status Updated 
        cy.get('#k-grid0-r1c22').should("include.text", "Jan 5, 2023");

    });

    it("Office_Availability_RecordDetails_LastVerified_Search", () => {
        //Click On RecordDetails tab
        cy.get('#mat-tab-label-0-5 > .mat-tab-label-content').click();
        //Click On from 
        cy.get('#mat-input-14').click()
        cy.get('#mat-input-14').click({ force: true })
        //Enter From Date
        cy.get('#mat-input-14').type("12/01/2022")
        //Click On To 
        cy.get('#mat-input-15').click({ force: true })
        cy.get('#mat-input-15').click({ force: true })
        //Enter To Date
        cy.get('#mat-input-15').type("12/01/2023")
        // Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Last Verified Date Checkbox
        cy.get(".mat-checkbox-label").contains(" Last Verified Date ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on Last Verified Date Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Last Verified Date  
        cy.get('#k-grid0-r1c22').should("include.text", "Jan 12, 2022");
        //Click on Last Verified Date Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Last Verified Date 
        cy.get('#k-grid0-r1c22').should("include.text", "Jan 6, 2023");

    });

    it("Office_Availability_UserCommunity_Alberta>Calgary_Search", () => {
        //Click On RecordDetails tab
        cy.get('#mat-tab-label-0-5 > .mat-tab-label-content').click();
        //Click on UserCommunity Dropdown
        cy.get("#mat-select-6").click();
        //Click On Alberta>Calgary
        cy.get('#mat-option-52').contains(" Alberta > Calgary ").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on User Community  Checkbox
        cy.get(".mat-checkbox-label").contains(" User Community ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert UserCommunity_Alberta>Calgary
        cy.get('#k-grid0-r1c22').should("have.text", " Alberta > Calgary ");
        //Click on UserCommunity Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert UserCommunity_Alberta>Calgary 
        cy.get('#k-grid0-r1c22').should("have.text", " Alberta > Calgary ");
        //Click on UserCommunity Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert UserCommunity_Alberta>Calgary 
        cy.get('#k-grid0-r1c22').should("have.text", " Alberta > Calgary ");
    });
});