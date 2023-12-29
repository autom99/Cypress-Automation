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
    
    it("Office_Availability_Vacancy_Unknown_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2").click();
        //Click On vacancy Dropdown
        cy.get("mat-label[class='search-chip-label ng-star-inserted']").contains(" Vacancy ").click({ force: true });
        //Select Unknown Check box
        cy.get("#mat-option-88 > .mat-option-pseudo-checkbox").click();
        //Click on Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button > .mat-button-wrapper > span").click({
            force: true,
        });
        //Click on Vacancy Check box
        cy.get(".mat-checkbox-layout").contains(" Vacancy ").click();
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click();
        //Assert Vacancy unknown
        cy.get("#k-grid0-r1c22").should("have.text", "Unknown");
        //Click on Vacancy Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Vacancy unknown after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Unknown");
        //Click on Vacancy Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Vacancy unknown after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Unknown");
    });

    it("Office_Availability_Vacancy_Occupied_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2").click();
        //Click On vacancy Dropdown
        cy.get("mat-label[class='search-chip-label ng-star-inserted']").contains(" Vacancy ").click({ force: true });
        //Select Occupied Check box
        cy.get("#mat-option-87 > .mat-option-pseudo-checkbox").click();
        //Click on Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button > .mat-button-wrapper > span").click({
            force: true,
        });
        //Click on Vacancy Check box
        cy.get(".mat-checkbox-layout").contains(" Vacancy ").click();
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click();
        //Assert Vacancy Occupied
        cy.get("#k-grid0-r1c22").should("have.text", "Occupied");
        //Click on Vacancy Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Vacancy Occupied after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Occupied");
        //Click on Vacancy Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Vacancy Occupied after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Occupied");
    });

    it("Office_Availability_Vacancy_Vacant_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2").click();
        //Click On vacancy Dropdown
        cy.get("mat-label[class='search-chip-label ng-star-inserted']").contains(" Vacancy ").click({ force: true });
        //Select Vacant Check box
        cy.get("#mat-option-89 > .mat-option-pseudo-checkbox").click();
        //Click on Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button > .mat-button-wrapper > span").click({
            force: true,
        });
        //Click on Vacancy Check box
        cy.get(".mat-checkbox-layout").contains(" Vacancy ").click();
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click();
        //Assert Vacancy Vacant
        cy.get("#k-grid0-r1c22").should("have.text", "Vacant");
        //Click on Vacancy Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Vacancy Vacant after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Vacant");
        //Click on Vacancy Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Vacancy Vacant after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Vacant");
    });
    it("Office_Availability_UnitCondition_BuiltOut_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2").click();
        //Click On unit Condition Dropdown
        cy.get("#mat-select-17").click();
        //Click on builtout checkbox
        cy.get("#mat-option-90 > .mat-option-pseudo-checkbox").click();
        //Click on Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button").click({ force: true });
        //Click on Unit Condition Check box
        cy.get(".mat-checkbox-layout").contains(" Unit Condition ").click();
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert UnitCondition BuiltOut
        cy.get("#k-grid0-r1c22").should("have.text", "Built Out");
        //Click on UnitCondition Header
        cy.get("#k-grid0-r0c22 > .k-cell-inner > .k-link").click({ force: true });
        //Assert UnitCondition BuiltOut after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Built Out");
        //Click on UnitCondition Header
        cy.get("#k-grid0-r0c22 > .k-cell-inner > .k-link").click({ force: true });
        //Assert UnitCondition BuiltOut after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Built Out");
    });

    it("Office_Availability_UnitCondition_Improved_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2").click();
        //Click On unit Condition Dropdown
        cy.get("#mat-select-17").click();
        //Click on Improved checkbox
        cy.get("#mat-option-91 > .mat-option-pseudo-checkbox").click();
        //Click on Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button").click({ force: true });
        //Click on Unit Condition Check box
        cy.get(".mat-checkbox-layout").contains(" Unit Condition ").click();
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert UnitCondition Improved
        cy.get("#k-grid0-r1c22").should("have.text", "Improved");
        //Click on UnitCondition Header
        cy.get("#k-grid0-r0c22 > .k-cell-inner > .k-link").click({ force: true });
        //Assert UnitCondition Improved after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Improved");
        //Click on UnitCondition Header
        cy.get("#k-grid0-r0c22 > .k-cell-inner > .k-link").click({ force: true });
        //Assert UnitCondition Improved after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Improved");
    });

    it("Office_Availability_UnitCondition_Model_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2").click();
        //Click On unit Condition Dropdown
        cy.get("#mat-select-17").click();
        //Click on Model checkbox
        cy.get("#mat-option-92 > .mat-option-pseudo-checkbox").click();
        //Click on Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button").click({ force: true });
        //Click on Unit Condition Check box
        cy.get(".mat-checkbox-layout").contains(" Unit Condition ").click();
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert UnitCondition Model
        cy.get("#k-grid0-r1c22").should("have.text", "Model");
        //Click on UnitCondition Header
        cy.get("#k-grid0-r0c22 > .k-cell-inner > .k-link").click({ force: true });
        //Assert UnitCondition Model after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Model");
        //Click on UnitCondition Header
        cy.get("#k-grid0-r0c22 > .k-cell-inner > .k-link").click({ force: true });
        //Assert UnitCondition Model after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Model");
    });

    it("Office_Availability_UnitCondition_Raw_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2").click();
        //Click On unit Condition Dropdown
        cy.get("#mat-select-17").click();
        //Click on Raw checkbox
        cy.get("#mat-option-93 > .mat-option-pseudo-checkbox").click();
        //Click on Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button").click({ force: true });
        //Click on Unit Condition Check box
        cy.get(".mat-checkbox-layout").contains(" Unit Condition ").click();
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert UnitCondition Raw
        cy.get("#k-grid0-r1c22").should("have.text", "Raw");
        //Click on UnitCondition Header
        cy.get("#k-grid0-r0c22 > .k-cell-inner > .k-link").click({ force: true });
        //Assert UnitCondition Raw after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Raw");
        //Click on UnitCondition Header
        cy.get("#k-grid0-r0c22 > .k-cell-inner > .k-link").click({ force: true });
        //Assert UnitCondition Raw after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Raw");
    });

    it("Office_Availability_UnitCondition_Unknown_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2").click();
        //Click On unit Condition Dropdown
        cy.get("#mat-select-17").click();
        //Click on Unknown checkbox
        cy.get("#mat-option-94 > .mat-option-pseudo-checkbox").click();
        //Click on Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button").click({ force: true });
        //Click on Unit Condition Check box
        cy.get(".mat-checkbox-layout").contains(" Unit Condition ").click();
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert UnitCondition Unknown
        cy.get("#k-grid0-r1c22").should("have.text", "Unknown");
        //Click on UnitCondition Header
        cy.get("#k-grid0-r0c22 > .k-cell-inner > .k-link").click({ force: true });
        //Assert UnitCondition Unknown after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Unknown");
        //Click on UnitCondition Header
        cy.get("#k-grid0-r0c22 > .k-cell-inner > .k-link").click({ force: true });
        //Assert UnitCondition Unknown after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Unknown");
    });

    it("Office_Availability_Usage_Flex_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on Usage Dropdown
        cy.get("#mat-select-18").click();
        //Click On flex Checkbox
        cy.get("#mat-option-95 > .mat-option-pseudo-checkbox").click();
        //Click on Search Button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button").click({ force: true });
        //Click on Usage checkbox
        cy.get(".mat-checkbox-label").contains(" Usage ").click({ force: true });
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert UsageFlex
        cy.get("#k-grid0-r1c22").should("have.text", "Flex");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UsageFlex after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Flex");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UsageFlex after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Flex");
    });

    it("Office_Availability_Usage_Industrial Unit_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on Usage Dropdown
        cy.get("#mat-select-18").click();
        //Click On Industrial Unit Checkbox
        cy.get("#mat-option-96 > .mat-option-pseudo-checkbox").click();
        //Click on Search Button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button").click({ force: true });
        //Click on Usage checkbox
        cy.get(".mat-checkbox-label").contains(" Usage ").click({ force: true });
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert Usage Industrial Unit
        cy.get("#k-grid0-r1c22").should("have.text", "Industrial Unit");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Industrial Unit after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Industrial Unit");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Industrial Unit after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Industrial Unit");
    });

    it("Office_Availability_Usage_Lab_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on Usage Dropdown
        cy.get("#mat-select-18").click();
        //Click On Lab Checkbox
        cy.get("#mat-option-97 > .mat-option-pseudo-checkbox").click();
        //Click on Search Button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button").click({ force: true });
        //Click on Usage checkbox
        cy.get(".mat-checkbox-label").contains(" Usage ").click({ force: true });
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert Usage Lab
        cy.get("#k-grid0-r1c22").should("have.text", "Lab");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Lab after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Lab");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Lab after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Lab");
    });

    it("Office_Availability_Usage_Land_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on Usage Dropdown
        cy.get("#mat-select-18").click();
        //Click On Land Checkbox
        cy.get("#mat-option-98 > .mat-option-pseudo-checkbox").click();
        //Click on Search Button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button").click({ force: true });
        //Click on Usage checkbox
        cy.get(".mat-checkbox-label").contains(" Usage ").click({ force: true });
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert Usage Land
        cy.get("#k-grid0-r1c22").should("have.text", "Land");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Land after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Land");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Land after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Land");
    });

    it("Office_Availability_Usage_Medical_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on Usage Dropdown
        cy.get("#mat-select-18").click();
        //Click On Medical Checkbox
        cy.get("#mat-option-99 > .mat-option-pseudo-checkbox").click();
        //Click on Search Button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button").click({ force: true });
        //Click on Usage checkbox
        cy.get(".mat-checkbox-label").contains(" Usage ").click({ force: true });
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert Usage Medical
        cy.get("#k-grid0-r1c22").should("have.text", "Medical");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Medical after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Medical");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Medical after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Medical");
    });

    it("Office_Availability_Usage_Office_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on Usage Dropdown
        cy.get("#mat-select-18").click();
        //Click On Office Checkbox
        cy.get("#mat-option-100 > .mat-option-pseudo-checkbox").click();
        //Click on Search Button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button").click({ force: true });
        //Click on Usage checkbox
        cy.get(".mat-checkbox-label").contains(" Usage ").click({ force: true });
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert Usage Office
        cy.get("#k-grid0-r1c22").should("have.text", "Office");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Office after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Office");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Office after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Office");
    });

    it("Office_Availability_Usage_Office Suite_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on Usage Dropdown
        cy.get("#mat-select-18").click();
        //Click On Office Suite Checkbox
        cy.get("#mat-option-101 > .mat-option-pseudo-checkbox").click();
        //Click on Search Button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button").click({ force: true });
        //Click on Usage checkbox
        cy.get(".mat-checkbox-label").contains(" Usage ").click({ force: true });
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert Usage Office Suite
        cy.get("#k-grid0-r1c22").should("have.text", "Office Suite");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Office Suite after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Office Suite");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Office Suite after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Office Suite");
    });

    it("Office_Availability_Usage_Retail Unit_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on Usage Dropdown
        cy.get("#mat-select-18").click();
        //Click On Retail Unit Checkbox
        cy.get("#mat-option-102 > .mat-option-pseudo-checkbox").click();
        //Click on Search Button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Button+ icon
        cy.get(".search-column-button").click({ force: true });
        //Click on Usage checkbox
        cy.get(".mat-checkbox-label").contains(" Usage ").click({ force: true });
        //Click on APPLY Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert Usage Retail Unit
        cy.get("#k-grid0-r1c22").should("have.text", "Retail Unit");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Retail Unit after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Retail Unit");
        //Click on Usage Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert Usage Retail Unit after sorting
        cy.get("#k-grid0-r1c22").should("have.text", "Retail Unit");
    });

    it("Office_Availability_ListingStatus_Active_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on Listing Status Dropdown
        cy.get("#mat-select-19").click();
        //Click On Active Checkbox
        cy.get("#mat-option-103 > .mat-option-pseudo-checkbox").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Listing Status Checkbox
        cy.get(".mat-checkbox-label")
            .contains(" Listing Status ")
            .click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert ListingStatus Active
        cy.get("#k-grid0-r1c22").should("have.text", " Active");
        //Click on Listing Status Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert ListingStatus Active
        cy.get("#k-grid0-r1c22").should("have.text", " Active");
        //Click on Listing Status Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert ListingStatus Active
        cy.get("#k-grid0-r1c22").should("have.text", " Active");
    });

    it("Office_Availability_ListingStatus_Cancelled_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on Listing Status Dropdown
        cy.get("#mat-select-19").click();
        //Click On Cancelled Checkbox
        cy.get("#mat-option-104 > .mat-option-pseudo-checkbox").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Listing Status Checkbox
        cy.get(".mat-checkbox-label")
            .contains(" Listing Status ")
            .click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert ListingStatus Cancelled
        cy.get("#k-grid0-r1c22").should("have.text", " Cancelled");
        //Click on Listing Status Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert ListingStatus Cancelled
        cy.get("#k-grid0-r1c22").should("have.text", " Cancelled");
        //Click on Listing Status Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert ListingStatus Cancelled
        cy.get("#k-grid0-r1c22").should("have.text", " Cancelled");
    });

    it("Office_Availability_ListingStatus_Expired_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on Listing Status Dropdown
        cy.get("#mat-select-19").click();
        //Click On Expired Checkbox
        cy.get("#mat-option-105 > .mat-option-pseudo-checkbox").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Listing Status Checkbox
        cy.get(".mat-checkbox-label")
            .contains(" Listing Status ")
            .click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert ListingStatus Expired
        cy.get("#k-grid0-r1c22").should("have.text", " Expired");
        //Click on Listing Status Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert ListingStatus Expired
        cy.get("#k-grid0-r1c22").should("have.text", " Expired");
        //Click on Listing Status Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert ListingStatus Expired
        cy.get("#k-grid0-r1c22").should("have.text", " Expired");
    });

    it("Office_Availability_ListingStatus_Pending for Completion_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on Listing Status Dropdown
        cy.get("#mat-select-19").click();
        //Click On Pending for Completion Checkbox
        cy.get("#mat-option-106 > .mat-option-pseudo-checkbox").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on Listing Status Checkbox
        cy.get(".mat-checkbox-label")
            .contains(" Listing Status ")
            .click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert ListingStatus Pending for Completion
        cy.get("#k-grid0-r1c22").should("have.text", " Pending for Completion");
        //Click on Listing Status Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert ListingStatus Pending for Completion
        cy.get("#k-grid0-r1c22").should("have.text", " Pending for Completion");
        //Click on Listing Status Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert ListingStatus Pending for Completion
        cy.get("#k-grid0-r1c22").should("have.text", " Pending for Completion");
    });

    it("Office_Availability_UnitPhysicalStatus_Demolished_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on UnitPhysicalStatus Dropdown
        cy.get("#mat-select-8").click();
        //Click On Demolished Checkbox
        cy.get("#mat-option-107 > .mat-option-pseudo-checkbox").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on UnitPhysicalStatus Checkbox
        cy.get(".mat-checkbox-label")
            .contains(" Unit Physical Status ")
            .click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert UnitPhysicalStatus Demolished
        cy.get("#k-grid0-r1c22").should("have.text", "Demolished");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Demolished
        cy.get("#k-grid0-r1c22").should("have.text", "Demolished");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Demolished
        cy.get("#k-grid0-r1c22").should("have.text", "Demolished");
    });

    it("Office_Availability_UnitPhysicalStatus_Design Build_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on UnitPhysicalStatus Dropdown
        cy.get("#mat-select-8").click();
        //Click On Design Build Checkbox
        cy.get("#mat-option-108 > .mat-option-pseudo-checkbox").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on UnitPhysicalStatus Checkbox
        cy.get(".mat-checkbox-label")
            .contains(" Unit Physical Status ")
            .click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert UnitPhysicalStatus Design Build
        cy.get("#k-grid0-r1c22").should("have.text", "Design Build");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Design Build
        cy.get("#k-grid0-r1c22").should("have.text", "Design Build");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Design Build
        cy.get("#k-grid0-r1c22").should("have.text", "Design Build");
    });

    it("Office_Availability_UnitPhysicalStatus_Existing_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on UnitPhysicalStatus Dropdown
        cy.get("#mat-select-8").click();
        //Click On Existing Checkbox
        cy.get("#mat-option-109 > .mat-option-pseudo-checkbox").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on UnitPhysicalStatus Checkbox
        cy.get(".mat-checkbox-label")
            .contains(" Unit Physical Status ")
            .click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert UnitPhysicalStatus Existing
        cy.get("#k-grid0-r1c22").should("have.text", "Existing");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Existing
        cy.get("#k-grid0-r1c22").should("have.text", "Existing");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Existing
        cy.get("#k-grid0-r1c22").should("have.text", "Existing");
    });
    it("Office_Availability_UnitPhysicalStatus_Planned_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on UnitPhysicalStatus Dropdown
        cy.get("#mat-select-8").click();
        //Click On Planned Checkbox
        cy.get("#mat-option-110 > .mat-option-pseudo-checkbox").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on UnitPhysicalStatus Checkbox
        cy.get(".mat-checkbox-label")
            .contains(" Unit Physical Status ")
            .click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert UnitPhysicalStatus Planned
        cy.get("#k-grid0-r1c22").should("have.text", "Planned");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Planned
        cy.get("#k-grid0-r1c22").should("have.text", "Planned");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Planned
        cy.get("#k-grid0-r1c22").should("have.text", "Planned");
    });

    it("Office_Availability_UnitPhysicalStatus_Speculative Construction_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on UnitPhysicalStatus Dropdown
        cy.get("#mat-select-8").click();
        //Click On Speculative Construction Checkbox
        cy.get("#mat-option-111 > .mat-option-pseudo-checkbox").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on UnitPhysicalStatus Checkbox
        cy.get(".mat-checkbox-label")
            .contains(" Unit Physical Status ")
            .click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert UnitPhysicalStatus Speculative Construction
        cy.get("#k-grid0-r1c22").should("have.text", "Speculative Construction");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Speculative Construction
        cy.get("#k-grid0-r1c22").should("have.text", "Speculative Construction");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Speculative Construction
        cy.get("#k-grid0-r1c22").should("have.text", "Speculative Construction");
    });

    it("Office_Availability_UnitPhysicalStatus_Under Construction_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on UnitPhysicalStatus Dropdown
        cy.get("#mat-select-8").click();
        //Click On Under Construction Checkbox
        cy.get("#mat-option-112 > .mat-option-pseudo-checkbox").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on UnitPhysicalStatus Checkbox
        cy.get(".mat-checkbox-label")
            .contains(" Unit Physical Status ")
            .click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert UnitPhysicalStatus Under Construction
        cy.get("#k-grid0-r1c22").should("have.text", "Under Construction");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Under Construction
        cy.get("#k-grid0-r1c22").should("have.text", "Under Construction");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Under Construction
        cy.get("#k-grid0-r1c22").should("have.text", "Under Construction");
    });
    it("Office_Availability_UnitPhysicalStatus_Under renovation_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Click on UnitPhysicalStatus Dropdown
        cy.get("#mat-select-8").click();
        //Click On Under renovation Checkbox
        cy.get("#mat-option-113 > .mat-option-pseudo-checkbox").click();
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on UnitPhysicalStatus Checkbox
        cy.get(".mat-checkbox-label")
            .contains(" Unit Physical Status ")
            .click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert UnitPhysicalStatus Under renovation
        cy.get("#k-grid0-r1c22").should("have.text", "Under renovation");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Under renovation
        cy.get("#k-grid0-r1c22").should("have.text", "Under renovation");
        //Click on UnitPhysicalStatus Header
        cy.get(
            "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
        ).click({ force: true });
        //Assert UnitPhysicalStatus Under renovation
        cy.get("#k-grid0-r1c22").should("have.text", "Under renovation");
    });

    it("Office_Availability_ListingNotes_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Enter Text in Listing notes 
        cy.get('#mat-input-23').type("Open concept suite.")
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on ListingNotes Checkbox
        cy.get(".mat-checkbox-label").contains(" Listing Notes ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert Listing notes text
        cy.get('#k-grid0-r1c22 > .overflow-cell > .ngx-ellipsis-inner').should("have.text", "Open concept suite. ");

    })

    it("Office_Availability_ListingReasearcherNotes_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Enter Text in ListingReasearcherNotes 
        cy.get('#mat-input-24').type("Added as per GWL monthly report.")
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on ListingReasearcherNotes Checkbox
        cy.get(".mat-checkbox-label").contains(" Listing Researcher Notes ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert ListingReasearcherNotes text
        cy.get('#k-grid0-r1c22').should("have.text", "Added as per GWL monthly report.");

    })
    
    it("Office_Availability_MLS#_Search", () => {
        //Click On Other Availability details tab
        cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
        //Enter Text in MLS# 
        cy.get('#mat-input-40').type("W3656563")
        //Click On Search button
        cy.get(".mat-raised-button").click({ force: true });
        //Click on Column + Button
        cy.get(".search-column-button").click({ force: true });
        //Click on MLS# Checkbox
        cy.get(".mat-checkbox-label").contains(" MLS # ").click({ force: true });
        //Click on Apply Button
        cy.get('[style="float: right"] > .mat-raised-button').click({
            force: true,
        });
        //Assert  MLS #  text
        cy.get('#k-grid0-r1c22').should("have.text", " W3656563 ");
    })
});