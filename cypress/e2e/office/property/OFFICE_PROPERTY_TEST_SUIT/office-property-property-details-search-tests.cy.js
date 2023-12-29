import { navigateToSameTab, launchWebsite, launchQAWebsite, selectOfficeProductline } from "../../../../utils/common";

describe("OfficePropertySearch", () => {
    beforeEach(function () {
        // launchWebsite();
        launchQAWebsite()
        selectOfficeProductline();
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
    it("Office_Property_NumberOfFloors_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-1 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get("input[protractor-name='numberOfFloorsFrom']").type("10");
        //enter Value in To
        cy.get("input[protractor-name='numberOfFloorsTo']").type("15");
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on NumberOfFloors Header
        cy.get('#k-grid0-r0c7 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  Number of Floors 
        cy.get('#k-grid0-r1c7').should("have.text", "10");
        //Click on NumberOfFloors Header
        cy.get('#k-grid0-r0c7 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  Number of Floors 
        cy.get('#k-grid0-r1c7').should("have.text", "15");
    });

    it("Office_Property_TotalOfficeSize_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-1 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get("input[protractor-name='fromOfficeSize']").type("1000");
        //enter Value in To
        cy.get("input[protractor-name='toOfficeSize']").type("6000");
        //Click On Search button
      cy.get(".mat-raised-button").click();
//         if(cy.get("label[class='filter-value ng-star-inserted']").should("contain"," 1,000 "))
// {
//     cy.get(".mat-raised-button").click({ force: true });
// }
       
        //Click on OfficeSizes Header
        cy.get('#k-grid0-r0c9 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  TotalOfficeSize 
        cy.get('#k-grid0-r1c9').should("have.text", " 1,000 sq. ft. ");
        //Click on TotalOfficeSize Header
        cy.get('#k-grid0-r0c9 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  TotalOfficeSize
        cy.get('#k-grid0-r1c9').should("have.text", " 6,000 sq. ft. ");

    });


    it("Office_Property_YearBuilt_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-1 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get("input[protractor-name='builtYearFrom']").type("1920");
        //enter Value in To
        cy.get("input[protractor-name='builtYearTo']").type("1930");
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on YearBuilt Header
        cy.get('#k-grid0-r0c11 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert YearBuilt
        cy.get('#k-grid0-r1c11').should("have.text", " 1920 ");
        //Click on YearBuilt Header
        cy.get('#k-grid0-r0c11 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert YearBuilt
        cy.get('#k-grid0-r1c11').should("have.text", " 1930 ");
    });

    it("Office_Property_Year Renovated_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-1 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get("input[protractor-name='fromYearRenovated']").type("2000");
        //enter Value in To
        cy.get("input[protractor-name='toYearRenovated']").type("2005");
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true })
        //Click on  Year Renovated  Header
        cy.get('#k-grid0-r0c12 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Year Renovated 
        cy.get('#k-grid0-r1c12').should("have.text", "2000");
        //Click on  Year Renovated Header
        cy.get('#k-grid0-r0c12 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  Year Renovated 
        cy.get('#k-grid0-r1c12').should("have.text", "2005");
    });
   
  
    it("Office_Property_MinFloorSize_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-1 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get("input[protractor-name='minFloorSizeFrom']").type("1000");
        //enter Value in To
        cy.get("input[protractor-name='minFloorSizeTo']").type("6000");
        //Click On Search button
      //cy.get(".mat-raised-button").click();
              if(cy.get("label[class='filter-value ng-star-inserted']").should("contain"," 1,000 "))
{
    cy.get(".mat-raised-button").click({ force: true });
}

     //Click on Column + Button
     cy.get(".search-column-button").click({ force: true });
     //Click on Min Floor Size Checkbox
     cy.get(".mat-checkbox-label").contains(" Min Floor Size ").click({ force: true });
     //Click on Apply Button
     cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on MinFloorSize Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  MinFloorSize 
        cy.get('#k-grid0-r1c27').should("have.text", " 1,000 sq. ft. ");
        //Click on MinFloorSize Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  MinFloorSize
        cy.get('#k-grid0-r1c27').should("have.text", " 6,000 sq. ft. ");

    });
    
    it("Office_Property_MaxFloorSize_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-1 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get("input[protractor-name='maxFloorSizeFrom']").type("1000");
        //enter Value in To
        cy.get("input[protractor-name='maxFloorSizeTo']").type("6000");
        //Click On Search button
     // cy.get(".mat-raised-button").click();
              if(cy.get("label[class='filter-value ng-star-inserted']").should("contain"," 1,000 "))
{
    cy.get(".mat-raised-button").click({ force: true });
}

     //Click on Column + Button
     cy.get(".search-column-button").click({ force: true });
     //Click on Max Floor Size Checkbox
     cy.get(".mat-checkbox-label").contains(" Max Floor Size ").click({ force: true });
     //Click on Apply Button
     cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on MaxFloorSize Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  MaxFloorSize 
        cy.get('#k-grid0-r1c27').should("have.text", " 1,000 sq. ft. ");
        //Click on MaxFloorSize Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  MaxFloorSize
        cy.get('#k-grid0-r1c27').should("have.text", " 6,000 sq. ft. ");

    });
    
    it("Office_Property_TypicalFloorsize_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-1 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get("input[protractor-name='TypicalFloorSizeFrom']").type("500");
        //enter Value in To
        cy.get("input[protractor-name='TypicalFloorSizeTo']").type("600");
        //Click On Search button
      //cy.get(".mat-raised-button").click();
              if(cy.get("label[class='filter-value ng-star-inserted']").should("contain"," 500 "))
{
    cy.get(".mat-raised-button").click({ force: true });
}

        //Click on TypicalFloorsize Header
        cy.get('#k-grid0-r0c8 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  TypicalFloorsize 
        cy.get('#k-grid0-r1c8').should("have.text", " 500 sq. ft. ");
        //Click on TypicalFloorsize Header
        cy.get('#k-grid0-r0c8 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  TypicalFloorsize
        cy.get('#k-grid0-r1c8').should("have.text", " 600 sq. ft. ");

    });
});