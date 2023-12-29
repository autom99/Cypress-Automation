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

    it("Office_Availability_Size,Price,Timing_ListedOn_Search", () => {
        //Click On Size,Price,Timing tab
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
        //Click on Calender Icon
        cy.get('.mat-form-field-suffix.ng-tns-c9-101.ng-star-inserted').click()
        //click on YearDropdown
        cy.get("button[aria-label='Choose month and year']").click({ multiple: true })
        //Click on year
        cy.get('[aria-label="2022"] > .mat-calendar-body-cell-content').click()
        //click on month Jan
        cy.get('[aria-label="01/01/2022"] > .mat-calendar-body-cell-content').click()
        //Click On Date 
        cy.get('[aria-label="12/01/2022"] > .mat-calendar-body-cell-content').click()
        //Click on Calender Icon
        cy.get("div[class='mat-form-field-suffix ng-tns-c9-102 ng-star-inserted'] button[aria-label='Open calendar']").click()
        //click on YearDropdown
        cy.get("button[aria-label='Choose month and year']").click({ multiple: true })
        //Click on year
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').contains("2023").click()
        //click on month Jan
        cy.get('[aria-label="01/01/2023"] > .mat-calendar-body-cell-content').click()
        //Click On Date 
        cy.get('[aria-label="12/01/2023"] > .mat-calendar-body-cell-content').click()

        // Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on ListedOn Checkbox
        cy.get(".mat-checkbox-label").contains(" Listed Date ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on ListedOn Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert ListedOn
        cy.get('#k-grid0-r1c22').should("include.text", "Jan 11, 2022", " Jan 12, 2022");
        //Click on ListedOn Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert ListedOn
        cy.get('#k-grid0-r1c22').should("include.text", "Jan 5, 2023", " Jan 12, 2023");

    });

    it("Office_Availability_Size,Price,Timing_AvailableOn_Search", () => {
        //Click On Size,Price,Timing tab
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
        //Click on Calender Icon
        cy.get("div[class='mat-form-field-suffix ng-tns-c9-105 ng-star-inserted'] button[aria-label='Open calendar']").click()
        //click on YearDropdown
        cy.get('.mat-calendar-period-button > .mat-button-wrapper').click({ multiple: true })
        //Click on year
        cy.get('[aria-label="2022"] > .mat-calendar-body-cell-content').click()
        //click on month Jan
        cy.get('[aria-label="01/01/2022"] > .mat-calendar-body-cell-content').click()
        //Click On Date 
        cy.get('[aria-label="01/01/2022"] > .mat-calendar-body-cell-content').click()
        //Click on Calender Icon
        cy.get("div[class='mat-form-field-suffix ng-tns-c9-106 ng-star-inserted'] button[aria-label='Open calendar']").click()
        //click on YearDropdown
        cy.get('.mat-calendar-period-button > .mat-button-wrapper').click({ multiple: true })
        //Click on year
        cy.get('[aria-label="2022"] > .mat-calendar-body-cell-content').click()
        //click on month Jan
        cy.get('[aria-label="01/01/2022"] > .mat-calendar-body-cell-content').click()
        //Click On Date 
        cy.get('[aria-label="15/01/2022"] > .mat-calendar-body-cell-content').click()
        // Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on AvailableOn Header
        cy.get('#k-grid0-r0c8 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert AvailableOn
        cy.get('#k-grid0-r1c8').should("include.text", "Jan 1, 2022");

    });
    
    it("Office_Availability_Size,Price,Timing_MinDivisible_Search", () => {
        //Click On Size,Price,Timing tab
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
        //Enter Min Divisible value
        cy.get('#mat-input-56').type("15000")
   // const MinDivtext =" >= 15,000 "

if(cy.get("label[class='filter-value ng-star-inserted']").should("contain"," >= 15,000 "))
{
    cy.get(".mat-raised-button").click({ force: true });
}
    
        //Click on MinDivisible  Header
        cy.get('#k-grid0-r0c6 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click()
        //Assert MinDivisible
        cy.get('#k-grid0-r1c6').should("have.text", " 15,000 sq. ft. ")
    });

    it("Office_Availability_Size,Price,Timing_AskingGrossRent_Search", () => {
        //Click On Size,Price,Timing tab
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
        //Click On Asking Rental rate type Dropdown
        cy.get('#mat-select-20').click();
        //Click on Gross 
        cy.get('#mat-option-83').click();
        //Enter Value in From
        cy.get('#mat-input-57').type("1500");
        //Enter value in To
        cy.get('#mat-input-58').type("1700");
        // Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on AskingGrossRent Header
        cy.get('#k-grid0-r0c11 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert AskingGrossRent 
        cy.get('#k-grid0-r1c11').should("have.text", "$1,500.00");

    });
    it("Office_Availability_Size,Price,Timing_AskingSalePrice_Search", () => {
        //Click On Size,Price,Timing tab
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
        //Enter Value in From
        cy.get('#mat-input-59').type("30000");
        //Enter value in To
        cy.get('#mat-input-60').type("50000");
        //Click On AskingSalePrice type Dropdown
        cy.get('#mat-select-21').click();
        //Click on total
        cy.get('#mat-option-85').click();
        // Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Asking Sale Price Checkbox
        cy.get(".mat-checkbox-label").contains(" Asking Sale Price ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on AskingSalePrice Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
        //Assert AskingSalePrice 
        cy.get('#k-grid0-r1c22').should("have.text", "$30,000.00");


    });

});
