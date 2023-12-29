import { navigateToSameTab, launchWebsite, launchQAWebsite , selectOfficeProductline} from "../../../../utils/common";

describe("OfficePropertySearch", () => {
    beforeEach(function () {
        // launchWebsite();
        launchQAWebsite();
        selectOfficeProductline();
        cy.get('.mat-nav-list > [protractor-name="menu_1"] > .mat-list-item > .mat-list-item-content').click();
    });
    it("Office_Property_Clearallfilters_Search", () => {
        //Click On 3 Dots At top right
        cy.get("span[class='mat-button-wrapper']").contains("more_vert").click();
        //Click on Clear All
        cy.get(".mat-menu-content > :nth-child(1)").click();
        //Click On 3 Dots At top right
        cy.get(".mat-button-wrapper").contains("more_vert").click({ force: true });
        //Click on Set As Default
        cy.get(".mat-menu-content > :nth-child(2)").click();
      });
    it("Office_Proeprty_RecordDetails_CreatedDate_Search", () => {
        //click on side arrow 
        cy.get('.mat-tab-header-pagination-after').click({ force: true });
        //Click On RecordDetails tab
        cy.get('#mat-tab-label-1-4 > .mat-tab-label-content').click();
        //Click On from 
        cy.get('input[protractor-name="createdFromDate"]').click()
        cy.get('input[protractor-name="createdFromDate"]').click({ force: true })
        //Enter From Date
        cy.get('input[protractor-name="createdFromDate"]').type("12/01/2022")
        //Click On To 
        cy.get('input[protractor-name="createdToDate"]').click({ force: true })
        cy.get('input[protractor-name="createdToDate"]').click({ force: true })
        //Enter To Date
        cy.get('input[protractor-name="createdToDate"]').type("12/02/2022")
        // Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on CreatedDate Checkbox
        cy.get(".mat-checkbox-label").contains(" Created Date ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on  Created Date  Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert  Created Date 
        cy.get('#k-grid0-r1c27').should("include.text", " Jan 12, 2022 ");
        //Click on  Created Date  Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert  Created Date 
        cy.get('#k-grid0-r1c27').should("include.text", " Feb 11, 2022 ", " Jan 12, 2023");

    });

    it("Office_Proeprty_RecordDetails_LastUpdated_Search", () => {
        //click on side arrow 
        cy.get('.mat-tab-header-pagination-after').click({ force: true });
        //Click On RecordDetails tab
        cy.get('#mat-tab-label-1-4 > .mat-tab-label-content').click();
        //Click On from 
        cy.get('input[protractor-name="lastUpdatedFromDate"]').click()
        cy.get('input[protractor-name="lastUpdatedFromDate"]').click({ force: true })
        //Enter From Date
        cy.get('input[protractor-name="lastUpdatedFromDate"]').type("12/01/2022")
        //Click On To 
        cy.get('input[protractor-name="lastUpdatedToDate"]').click({ force: true })
        cy.get('input[protractor-name="lastUpdatedToDate"]').click({ force: true })
        //Enter To Date
        cy.get('input[protractor-name="lastUpdatedToDate"]').type("12/01/2023")
        // Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Last Updated Checkbox
        cy.get(".mat-checkbox-label").contains(" Last Updated ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on Last Updated Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Last Updated 
        cy.get('#k-grid0-r1c27').should("include.text", "Jan 12, 2022");
        //Click on Last Updated Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Last Updated 
        cy.get('#k-grid0-r1c27').should("include.text", " Jan 12, 2023 ", "Jan 12, 2023");

    });

    it("Office_Proeprty_RecordDetails_StatusUpdated_Search", () => {
         //click on side arrow 
         cy.get('.mat-tab-header-pagination-after').click({ force: true });
        //Click On RecordDetails tab
        cy.get('#mat-tab-label-1-4 > .mat-tab-label-content').click();
        //Click On from 
        cy.get('input[protractor-name="statusUpdatedFromDate"]').click()
        cy.get('input[protractor-name="statusUpdatedFromDate"]').click({ force: true })
        //Enter From Date
        cy.get('input[protractor-name="statusUpdatedFromDate"]').type("12/01/2022")
        //Click On To 
        cy.get('input[protractor-name="statusUpdatedToDate"]').click({ force: true })
        cy.get('input[protractor-name="statusUpdatedToDate"]').click({ force: true })
        //Enter To Date
        cy.get('input[protractor-name="statusUpdatedToDate"]').type("12/01/2023")
        // Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Status Updated Checkbox
        cy.get(".mat-checkbox-label").contains(" Status Updated ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on Status Updated Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Status Updated 
        cy.get('#k-grid0-r1c27').should("include.text", " Jan 11, 2022 ");
        //Click on Status Updated Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Status Updated 
        cy.get('#k-grid0-r1c27').should("include.text", " Jan 5, 2023 ");

    });

    it("Office_Proeprty_RecordDetails_LastVerified_Search", () => {
          //click on side arrow 
          cy.get('.mat-tab-header-pagination-after').click({ force: true });
        //Click On RecordDetails tab
        cy.get('#mat-tab-label-1-4 > .mat-tab-label-content').click();
        //Click On from 
        cy.get('input[protractor-name="LastVarifiedFromDate"]').click()
        cy.get('input[protractor-name="LastVarifiedFromDate"]').click({ force: true })
        //Enter From Date
        cy.get('input[protractor-name="LastVarifiedFromDate"]').type("12/01/2022")
        //Click On To 
        cy.get('input[protractor-name="LastVarifiedToDate"]').click({ force: true })
        cy.get('input[protractor-name="LastVarifiedToDate"]').click({ force: true })
        //Enter To Date
        cy.get('input[protractor-name="LastVarifiedToDate"]').type("12/01/2023")
        // Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Last Verified Date Checkbox
        cy.get(".mat-checkbox-label").contains(" Last Verified Date ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on Last Verified Date Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Last Verified Date  
        cy.get('#k-grid0-r1c27').should("include.text", " Feb 23, 2022 ");
        //Click on Last Verified Date Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert Last Verified Date 
        cy.get('#k-grid0-r1c27').should("include.text", " Dec 28, 2022 ");

    });
    it("Office_Proeprty_UserCommunity_Alberta>Calgary_Search", () => {
          //click on side arrow 
          cy.get('.mat-tab-header-pagination-after').click({ force: true });
        //Click On RecordDetails tab
        cy.get('#mat-tab-label-1-4 > .mat-tab-label-content').click();
        //Click on UserCommunity Dropdown
        cy.get("#mat-select-28").click();
        //Click On Alberta>Calgary
        cy.get('#mat-option-213').contains(" Alberta > Calgary ").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on User Community  Checkbox
        cy.get(".mat-checkbox-label").contains(" User Community ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert UserCommunity_Alberta>Calgary
        cy.get('#k-grid0-r1c27').should("have.text", " Alberta > Calgary ");
        //Click on UserCommunity Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert UserCommunity_Alberta>Calgary 
        cy.get('#k-grid0-r1c27').should("have.text", " Alberta > Calgary ");
        //Click on UserCommunity Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert UserCommunity_Alberta>Calgary 
        cy.get('#k-grid0-r1c27').should("have.text", " Alberta > Calgary ");
    });
});