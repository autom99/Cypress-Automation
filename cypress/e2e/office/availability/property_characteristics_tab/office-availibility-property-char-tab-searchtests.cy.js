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
    it("Office_Availability_BuildingClass_A_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //Click on BuildingClass Dropdown
        cy.get("#mat-select-9").click();
        //Click On A Checkbox
        cy.get('#mat-option-114 > .mat-option-pseudo-checkbox').click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Assert BuildingClass A
        cy.get('#k-grid0-r1c18').should("have.text", "A");
        //Click on BuildingClass Header
        cy.get('#k-grid0-r0c18 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert BuildingClass A
        cy.get('#k-grid0-r1c18').should("have.text", "A");
        //Click on BuildingClass Header
        cy.get('#k-grid0-r0c18 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert BuildingClass A
        cy.get('#k-grid0-r1c18').should("have.text", "A");
    });

    it("Office_Availability_BuildingClass_AA_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //Click on BuildingClass Dropdown
        cy.get("#mat-select-9").click();
        //Click On AA Checkbox
        cy.get('#mat-option-115 > .mat-option-pseudo-checkbox').click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Assert BuildingClass AA
        cy.get('#k-grid0-r1c18').should("have.text", "AA ");
        //Click on BuildingClass Header
        cy.get('#k-grid0-r0c18 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert BuildingClass AA
        cy.get('#k-grid0-r1c18').should("have.text", "AA ");
        //Click on BuildingClass Header
        cy.get('#k-grid0-r0c18 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert BuildingClass AA
        cy.get('#k-grid0-r1c18').should("have.text", "AA ");
    });
    it("Office_Availability_BuildingPhysicalStatus_Demolished_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //Click on BuildingPhysicalStatus Dropdown
        cy.get("#mat-select-10").click();
        //Click On Demolished Checkbox
        cy.get('#mat-option-122 > .mat-option-pseudo-checkbox').click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Assert BuildingPhysicalStatus_Demolished 
        cy.get('#k-grid0-r1c19').should("have.text", "Demolished");
        //Click on BuildingPhysicalStatus Header
        cy.get('#k-grid0-r0c18 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert BuildingPhysicalStatus_Demolished
        cy.get('#k-grid0-r1c19').should("have.text", "Demolished");
        //Click on BuildingPhysicalStatus Header
        cy.get('#k-grid0-r0c18 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert BuildingPhysicalStatus_Demolished
        cy.get('#k-grid0-r1c19').should("have.text", "Demolished");
    });
    it("Office_Availability_BuildingPhysicalStatus_Existing _Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //Click on BuildingPhysicalStatus Dropdown
        cy.get("#mat-select-10").click();
        //Click On Existing  Checkbox
        cy.get('#mat-option-124 > .mat-option-pseudo-checkbox').click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Assert BuildingPhysicalStatus_Existing  
        cy.get('#k-grid0-r1c19').should("have.text", "Existing");
        //Click on BuildingPhysicalStatus Header
        cy.get('#k-grid0-r0c18 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert BuildingPhysicalStatus_Existing
        cy.get('#k-grid0-r1c19').should("have.text", "Existing");
        //Click on BuildingPhysicalStatus Header
        cy.get('#k-grid0-r0c18 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert BuildingPhysicalStatus_Existing
        cy.get('#k-grid0-r1c19').should("have.text", "Existing");
    });

    it("Office_Availability_Tenancy_SingleTenant _Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //Click on Tenancy Dropdown
        cy.get("#mat-select-11").click();
        //Click On SingleTenant  Checkbox
        cy.get('#mat-option-130 > .mat-option-pseudo-checkbox').click();
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
        cy.get("#k-grid0-r1c22").should("have.text", " Single Tenant ");
        //Click on Tenancy Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Tenancy SingleTenant
        cy.get('#k-grid0-r1c22').should("have.text", " Single Tenant ");
        //Click on Tenancy Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Tenancy SingleTenant
        cy.get("#k-grid0-r1c22").should("have.text", " Single Tenant ");
    });

    it("Office_Availability_Occupant_Competitive _Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //Click on Occupant Dropdown
        cy.get("#mat-select-12").click();
        //Click On Competitive Checkbox
        cy.get('#mat-option-133 > .mat-option-pseudo-checkbox').click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Occupant Checkbox
        cy.get(".mat-checkbox-label").contains(" Occupant ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert Occupant_Competitive
        cy.get('#k-grid0-r1c22').should("have.text", "Competitive");
        //Click on Occupant Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Occupant_Competitive
        cy.get('#k-grid0-r1c22').should("have.text", "Competitive");
        //Click on Occupant Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Occupant_Competitive
        cy.get('#k-grid0-r1c22').should("have.text", "Competitive");
    });

    it("Office_Availability_PropertyCode_Converted_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //Click on PropertyCode Dropdown
        cy.get("#mat-select-13").click();
        //Click On Converted Checkbox
        cy.get('#mat-option-138 > .mat-option-pseudo-checkbox').click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Converted Checkbox
        cy.get(".mat-checkbox-label").contains(" Property Code ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert PropertyCode_Converted
        cy.get('#k-grid0-r1c22').should("have.text", " Converted");
        //Click on PropertyCode Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert PropertyCode_Converted
        cy.get('#k-grid0-r1c22').should("have.text", " Converted");
        //Click on PropertyCode Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert PropertyCode_Converted
        cy.get('#k-grid0-r1c22').should("have.text", " Converted");
    });
    it("Office_Availability_PropertyGroup_ Montreal Top 7 _Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //Click on PropertyGroup Dropdown
        cy.get("#mat-select-14").click();
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
        cy.get('#k-grid0-r1c22').should("have.text", " Montreal Top 7 ");
        //Click on PropertyGroup Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert PropertyGroup_ Montreal Top 7 
        cy.get('#k-grid0-r1c22').should("have.text", " Montreal Top 7 ");
        //Click on PropertyGroup Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert PropertyGroup_ Montreal Top 7 
        cy.get('#k-grid0-r1c22').should("have.text", " Montreal Top 7 ");
    });

    it("Office_Availability_Specification_Elevator-Passenger_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //Click on Specification Dropdown
        cy.get("#mat-select-5").click();
        //click on  Elevator-Passenger
        cy.get('#mat-option-34 > .mat-option-text').click();
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
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Click on Specification Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Specification_BOMAGold 
        cy.get('#k-grid0-r1c22').should('include.text', 'Elevator-Passenger: 6');


    });
    it("Office_Availability_PropertyNotes_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //Enter Text in PropertyNotes
        cy.get('#mat-input-5').type("Some underground parking available.")
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on PropertyNotes Checkbox
        cy.get(".mat-checkbox-label").contains(" Property Notes ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert  Property Notes  
        cy.get('#k-grid0-r1c22').should("include.text", "Some underground parking available.");
        //Click on Propertynotes Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert PropertyNotes 
        cy.get('#k-grid0-r1c22').should("include.text", "Some underground parking available.");
        //Click on Propertynotes Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Propertynotes 
        cy.get('#k-grid0-r1c22').should("include.text", "Some underground parking available.");
    });
    it("Office_Availability_PropertyResearcherNotes_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //Enter Text in PropertyResearcherNotes
        cy.get('#mat-input-6').type("Test data")
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on  PropertyResearcherNotes Checkbox
        cy.get(".mat-checkbox-label").contains(" Property Researcher Notes ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert   Property Researcher Notes  
        cy.get('#k-grid0-r1c22').should("include.text", "Test data");
        //Click on  Property Researcher Notes  Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  Property Researcher Notes  
        cy.get('#k-grid0-r1c22').should("include.text", "Test data");
        //Click on  Property Researcher Notes  Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  Property Researcher Notes  
        cy.get('#k-grid0-r1c22').should("include.text", "Test data");
    });
    it("Office_Availability_Legal Description_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //Enter Text in Legal Description 
        cy.get('#mat-input-7').type("Tract German Company Pt Lot 7 Rp 58r2318 Part 3")
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on  Legal Description  Checkbox
        cy.get(".mat-checkbox-label").contains(" Legal Description ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Assert Legal Description 
        cy.get('#k-grid0-r1c22').should("include.text", "Tract German Company Pt Lot 7 Rp 58r2318 Part 3");
        //Click on Legal Description Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Legal Description   
        cy.get('#k-grid0-r1c22').should("include.text", "Tract German Company Pt Lot 7 Rp 58r2318 Part 3");
        //Click on Legal Description Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Legal Description  
        cy.get('#k-grid0-r1c22').should("include.text", "Tract German Company Pt Lot 7 Rp 58r2318 Part 3");
    });

    it("Office_Availability_HeritageBuilding_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
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
        cy.get('#k-grid0-r1c22').should("include.text", " Yes");
        //Click on Heritage Building Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Heritage Building   
        cy.get('#k-grid0-r1c22').should("include.text", " Yes");
        //Click on Heritage Building  Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Heritage Building 
        cy.get('#k-grid0-r1c22').should("include.text", " Yes");
    });

    it("Office_Availability_NumberOfFloors_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get('#mat-input-25').type("10");
        //enter Value in To
        cy.get('#mat-input-26').type("15");
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on  Number of Floors  Checkbox
        cy.get(".mat-checkbox-label").contains(" Number of Floors ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on NumberOfFloors Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  Number of Floors 
        cy.get('#k-grid0-r1c22').should("have.text", "10");
        //Click on NumberOfFloors Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  Number of Floors 
        cy.get('#k-grid0-r1c22').should("have.text", "15");
    });

    it("Office_Availability_OfficeSize_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get('#mat-input-61').type("1000");
        //enter Value in To
        cy.get('#mat-input-62').type("6000");
        //Click On Search button
      cy.get(".mat-raised-button").click();
//         if(cy.get("label[class='filter-value ng-star-inserted']").should("contain"," 1,000 "))
// {
//     cy.get(".mat-raised-button").click({ force: true });
// }
        //Click on Column + Button
        cy.get(".search-column-button").click();
        //Click on  OfficeSize  Checkbox
        cy.get(".mat-checkbox-label").contains(" Office Size ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on OfficeSizes Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  OfficeSize 
        cy.get('#k-grid0-r1c22').should("have.text", " 500 sq. ft. ");
        //Click on OfficeSize Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  OfficeSize
        cy.get('#k-grid0-r1c22').should("have.text", " 500 sq. ft. ");

    });

    it("Office_Availability_TotalBuildingSize_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get('#mat-input-27').type("500");
        //enter Value in To
        cy.get('#mat-input-28').type("5000");
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on TotalBuildingSize Checkbox
        cy.get(".mat-checkbox-label").contains(" Total Building Size ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on TotalBuildingSize Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert TotalBuildingSize
        cy.get('#k-grid0-r1c22').should("have.text", " 500 sq. ft. ");
        //Click on TotalBuildingSize Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert TotalBuildingSize
        cy.get('#k-grid0-r1c22').should("have.text", " 500 sq. ft. ");
    });

    it("Office_Availability_YearBuilt_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get('#mat-input-29').type("1920");
        //enter Value in To
        cy.get('#mat-input-30').type("1930");
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on YearBuilt Header
        cy.get('#k-grid0-r0c20 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert YearBuilt
        cy.get('#k-grid0-r1c20').should("have.text", " 1920 ");
        //Click on YearBuilt Header
        cy.get('#k-grid0-r0c20 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert YearBuilt
        cy.get('#k-grid0-r1c20').should("have.text", " 1930 ");
    });

    it("Office_Availability_Year Renovated_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get('#mat-input-31').type("2000");
        //enter Value in To
        cy.get('#mat-input-32').type("2005");
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Year Renovated Checkbox
        cy.get(".mat-checkbox-label").contains(" Year Renovated ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on  Year Renovated  Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Year Renovated 
        cy.get('#k-grid0-r1c22').should("have.text", "2000");
        //Click on  Year Renovated Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert  Year Renovated 
        cy.get('#k-grid0-r1c22').should("have.text", "2005");
    });
    it("Office_Availability_ParkingRatio_Search", () => {
        //Click On PROPERTY CHARACTERISTICS tab
        cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
        //enter Value in From
        cy.get('#mat-input-33').type("500");
        //enter Value in To
        cy.get('#mat-input-34').type("1000");
        //enter Value in From
        cy.get('#mat-input-35').type("500");
        //enter Value in To
        cy.get('#mat-input-36').type("1000");
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on ParkingRatio Checkbox
        cy.get(".mat-checkbox-label").contains(" Parking Ratio ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
        //Click on Parking Ratio Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Parking Ratio 
        cy.get('#k-grid0-r1c22').should("have.text", " 500 : 1,000 sq. ft. ");
        //Click on Parking Ratio Header
        cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
        //Assert Parking Ratio  
        cy.get('#k-grid0-r1c22').should("have.text", " 500 : 1,000 sq. ft. ");
    });

});