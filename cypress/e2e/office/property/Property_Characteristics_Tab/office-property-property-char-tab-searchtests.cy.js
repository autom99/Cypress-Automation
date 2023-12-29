import { navigateToSameTab, launchWebsite, launchQAWebsite , selectOfficeProductline} from "../../../../utils/common";

describe("OfficePropertySearchTests", () => {
    beforeEach(function () {
        // launchWebsite();
        launchQAWebsite();
        selectOfficeProductline();
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

    it("Office_Property_Tenancy_SingleTenant _Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-2 > .mat-tab-label-content').click();
        //Click on Tenancy Dropdown
        cy.get("mat-label[class='ng-star-inserted']").contains(" Tenancy ").click({ force: true });
        //Click On SingleTenant  Checkbox
        cy.get('#mat-option-245 > .mat-option-pseudo-checkbox').click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Tenancy Checkbox
        cy.get(".mat-checkbox-label")
            .contains(" Tenancy ")
            .click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert Tenancy SingleTenant
        cy.get('#k-grid0-r1c27').should("have.text", " Single Tenant ");
        //Click on Tenancy Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Tenancy SingleTenant
        cy.get('#k-grid0-r1c27').should("have.text", " Single Tenant ");
        //Click on Tenancy Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Tenancy SingleTenant
        cy.get('#k-grid0-r1c27').should("have.text", " Single Tenant ");
    });

    it("Office_Property_Occupant_Competitive _Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-2 > .mat-tab-label-content').click();
        //Click on Occupant Dropdown
        cy.get("mat-label[class='ng-star-inserted']").contains(" Occupant ").click({ force: true });
        //Click On Competitive Checkbox
        cy.get('#mat-option-248 > .mat-option-pseudo-checkbox').click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Occupant Checkbox
        cy.get(".mat-checkbox-label").contains(" Occupant ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert Occupant_Competitive
        cy.get('#k-grid0-r1c27').should("have.text", " Competitive");
        //Click on Occupant Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Occupant_Competitive
        cy.get('#k-grid0-r1c27').should("have.text", " Competitive");
        //Click on Occupant Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Occupant_Competitive
        cy.get('#k-grid0-r1c27').should("have.text", " Competitive");
    });

    it("Office_Property_PropertyCode_Converted_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-2 > .mat-tab-label-content').click();
        //Click on PropertyCode Dropdown
        cy.get("mat-label[class='ng-star-inserted']").contains(" Property Code ").click({ force: true });
        //Click On Converted Checkbox
        cy.get('#mat-option-253 > .mat-option-pseudo-checkbox').click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Converted Checkbox
        cy.get(".mat-checkbox-label").contains(" Property Code ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert PropertyCode_Converted
        cy.get('#k-grid0-r1c27').should("have.text", " Converted");
        //Click on PropertyCode Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert PropertyCode_Converted
        cy.get('#k-grid0-r1c27').should("have.text", " Converted");
        //Click on PropertyCode Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert PropertyCode_Converted
        cy.get('#k-grid0-r1c27').should("have.text", " Converted");
    });
    it("Office_Property_PropertyGroup_ Montreal Top 7 _Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-2 > .mat-tab-label-content').click();
        //Click on PropertyGroup Dropdown
        cy.get("mat-label[class='ng-star-inserted']").contains(" Property Group ").click({ force: true });
        //Click On Montreal Top 7
        cy.get("span[class='mat-option-text']").contains(" Montreal Top 7 ").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on PropertyGroup Checkbox
        cy.get(".mat-checkbox-label").contains(" Property Group ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert PropertyGroup_ Montreal Top 7 
        cy.get('#k-grid0-r1c27').should("have.text", " Montreal Top 7 ");
        //Click on PropertyGroup Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert PropertyGroup_ Montreal Top 7 
        cy.get('#k-grid0-r1c27').should("have.text", " Montreal Top 7 ");
        //Click on PropertyGroup Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert PropertyGroup_ Montreal Top 7 
        cy.get('#k-grid0-r1c27').should("have.text", " Montreal Top 7 ");
    });

    it("Office_Property_Specification_Elevator-Passenger_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-2 > .mat-tab-label-content').click();
        //Click on Specification Dropdown
        cy.get("mat-label[class='ng-star-inserted']").contains(" Specification ").click({ force: true });
        //click on  Elevator-Passenger
        cy.get("span[class='mat-option-text']").contains(" Elevator-Passenger ").click();
        //click on plus button
        cy.get("button[protractor-name='btnAddSpecification']").click({ force: true });
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on  Specification  Checkbox
        cy.get(".mat-checkbox-label").contains(" Specification ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on Specification Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Click on Specification Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Specification_BOMAGold 
        cy.get('#k-grid0-r1c27').should('include.text', 'Elevator-Passenger: 2');


    });
    it("Office_Property_PropertyNotes_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-2 > .mat-tab-label-content').click();
        //Enter Text in PropertyNotes
        cy.get("input[protractor-name='propertyNotes']").type("Some underground parking available")
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Assert  Property Notes  
        cy.get('#k-grid0-r1c22').should("include.text", "Some underground parking available.");
        //Click on Propertynotes Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert PropertyNotes 
        cy.get('#k-grid0-r1c22').should("include.text", "Some underground parking available.");
        //Click on Propertynotes Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Propertynotes 
        cy.get('#k-grid0-r1c22  ').should("include.text", "Some underground parking available.");
    });
    it("Office_Property_PropertyResearcherNotes_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-2 > .mat-tab-label-content').click();
        //Enter Text in PropertyResearcherNotes
        cy.get("input[protractor-name='propertyResearcherNotes']").type("Test data")
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Assert   Property Researcher Notes  
        cy.get('#k-grid0-r1c23').should("include.text", "Test data");
        //Click on  Property Researcher Notes  Header
        cy.get('#k-grid0-r0c23 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  Property Researcher Notes  
        cy.get('#k-grid0-r1c23').should("include.text", "Test data");
        //Click on  Property Researcher Notes  Header
        cy.get('#k-grid0-r0c23 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  Property Researcher Notes  
        cy.get('#k-grid0-r1c23').should("include.text", "Test data");
    });
    it("Office_Property_Legal Description_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-2 > .mat-tab-label-content').click();
        //Enter Text in Legal Description 
        cy.get("input[protractor-name='legalDescription']").type("Tract German Company Pt Lot 7 Rp 58r2318 Part 3")
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on  Legal Description  Checkbox
        cy.get(".mat-checkbox-label").contains(" Legal Description ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert Legal Description 
        cy.get('#k-grid0-r1c27').should("include.text", "Tract German Company Pt Lot 7 Rp 58r2318 Part 3");
        //Click on Legal Description Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Legal Description   
        cy.get('#k-grid0-r1c27').should("include.text", "Tract German Company Pt Lot 7 Rp 58r2318 Part 3");
        //Click on Legal Description Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Legal Description  
        cy.get('#k-grid0-r1c27').should("include.text", "Tract German Company Pt Lot 7 Rp 58r2318 Part 3");
    });

    it("Office_Property_HeritageBuilding_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-2 > .mat-tab-label-content').click();
        //Click On heritage Building Checkbox
        cy.get('.mat-checkbox-label').contains(' Heritage Building ').click({ force: true });
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on  HeritageBuilding Checkbox
        cy.get(".mat-checkbox-label").contains(" Heritage Building ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert Heritage Building 
        cy.get('#k-grid0-r1c27').should("include.text", " Yes");
        //Click on Heritage Building Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Heritage Building   
        cy.get('#k-grid0-r1c27').should("include.text", " Yes");
        //Click on Heritage Building  Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Heritage Building 
        cy.get('#k-grid0-r1c27').should("include.text", " Yes");
    });

    it("Office_Property_ParkingRatio_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-1-2 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get("input[protractor-name='from']").type("500");
        //enter Value in To
        cy.get("input[protractor-name='to']").type("1000");
        //enter Value in From
        cy.get("input[protractor-name='sqFTFrom']").type("500");
        //enter Value in To
        cy.get("input[protractor-name='sqFTTo']").type("1000");
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on ParkingRatio Checkbox
        cy.get(".mat-checkbox-label").contains(" Parking Ratio ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on Parking Ratio Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Parking Ratio 
        cy.get('#k-grid0-r1c27').should("have.text", " 500 : 1,000 sq. ft. ");
        //Click on Parking Ratio Header
        cy.get('#k-grid0-r0c27 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Parking Ratio  
        cy.get('#k-grid0-r1c27').should("have.text", " 500 : 1,000 sq. ft. ");
    });

});