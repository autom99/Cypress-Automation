import { navigateToSameTab, launchWebsite, launchQAWebsite } from "../../../utils/common";

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

  it("Office_Availability_LeaseSublet_Search", () => {
    //Click on Lease
    cy.get("#mat-checkbox-3-input").click({ force: true });
    //Click On Sublet
    cy.get("#mat-checkbox-6-input").click({ force: true });
    //Click On search Button
    cy.get(".mat-raised-button").click({ force: true });
    //Assert LeaseSublet
    cy.get("#k-grid0-r1c7").should("have.text", " Lease,  Sublet ");
  });

  it("Office_Availability_LeaseDirect_Search", () => {
    //Click on Lease
    cy.get("#mat-checkbox-3-input").click({ force: true });
    //Click On Direct
    cy.get("#mat-checkbox-5-input").click({ force: true });
    //Click On search Button
    cy.get(".mat-raised-button").click({ force: true });
    //Assert LeaseDirect
    cy.get("#k-grid0-r1c7").should("have.text", " Lease,  Direct ");
  });

  it("Office_Availability_Sale_Search", () => {
    //Click on Sale
    cy.get("#mat-checkbox-4-input").click({ force: true });
    //Click On search Button
    cy.get(".mat-raised-button").click({ force: true });
    //Assert Sale
    cy.get("#k-grid0-r1c7").should("have.text", " Sale ");
  });

  it("Office_Availability_City_Toronto_Search", () => {
    //type city name
    cy.get("#mat-chip-list-input-2").type("Toronto");
    //click on Search
    cy.get(".mat-raised-button").click();
    //click on City header
    cy.get('#k-grid0-r0c17 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click();
    //Assert CityToronto
    cy.get("#k-grid0-r5c17").should("have.text", "Toronto");

  });

  it("Office_Availability_Address_Search", () => {
    //type Address name
    cy.get("input[protractor-name='address']").type("1 Hobin Street");
    //click on Search
    cy.get(".mat-raised-button").click();
    //Assert Address name
    cy.get('#k-grid0-r1c2 > .ref-no-link').should("include.text", "1 Hobin Street");


  });
  /*
    it("Office_Availability_Vacancy_Unknown_Search", () => {
      //Click On Other Availability details tab
      cy.get("#mat-tab-label-0-2").click();
      //Click On vacancy Dropdown
      cy.get("#mat-form-field-label-117").click({ force: true });
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
      cy.get("#mat-form-field-label-117").click({ force: true });
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
      cy.get("#mat-form-field-label-117").click({ force: true });
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
      cy.get("#k-grid0-r1c22").should("have.text", "Active");
      //Click on Listing Status Header
      cy.get(
        "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
      ).click({ force: true });
      //Assert ListingStatus Active
      cy.get("#k-grid0-r1c22").should("have.text", "Active");
      //Click on Listing Status Header
      cy.get(
        "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
      ).click({ force: true });
      //Assert ListingStatus Active
      cy.get("#k-grid0-r1c22").should("have.text", "Active");
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
      cy.get("#k-grid0-r1c22").should("have.text", "Cancelled");
      //Click on Listing Status Header
      cy.get(
        "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
      ).click({ force: true });
      //Assert ListingStatus Cancelled
      cy.get("#k-grid0-r1c22").should("have.text", "Cancelled");
      //Click on Listing Status Header
      cy.get(
        "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
      ).click({ force: true });
      //Assert ListingStatus Cancelled
      cy.get("#k-grid0-r1c22").should("have.text", "Cancelled");
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
      cy.get("#k-grid0-r1c22").should("have.text", "Expired");
      //Click on Listing Status Header
      cy.get(
        "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
      ).click({ force: true });
      //Assert ListingStatus Expired
      cy.get("#k-grid0-r1c22").should("have.text", "Expired");
      //Click on Listing Status Header
      cy.get(
        "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
      ).click({ force: true });
      //Assert ListingStatus Expired
      cy.get("#k-grid0-r1c22").should("have.text", "Expired");
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
      cy.get("#k-grid0-r1c22").should("have.text", "Pending for Completion");
      //Click on Listing Status Header
      cy.get(
        "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
      ).click({ force: true });
      //Assert ListingStatus Pending for Completion
      cy.get("#k-grid0-r1c22").should("have.text", "Pending for Completion");
      //Click on Listing Status Header
      cy.get(
        "#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner"
      ).click({ force: true });
      //Assert ListingStatus Pending for Completion
      cy.get("#k-grid0-r1c22").should("have.text", "Pending for Completion");
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
      cy.get('#mat-input-42').type("W3656563")
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
      cy.get('#k-grid0-r1c22').should("have.text", "W3656563");
    })
  */

  /*
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
      cy.get("#k-grid0-r1c22").should("have.text", "Single Tenant");
      //Click on Tenancy Header
      cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
      //Assert Tenancy SingleTenant
      cy.get('#k-grid0-r1c22').should("have.text", "Single Tenant");
      //Click on Tenancy Header
      cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
      //Assert Tenancy SingleTenant
      cy.get("#k-grid0-r1c22").should("have.text", "Single Tenant");
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
      cy.get('#k-grid0-r1c22').should("have.text", "Converted");
      //Click on PropertyCode Header
      cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
      //Assert PropertyCode_Converted
      cy.get('#k-grid0-r1c22').should("have.text", "Converted");
      //Click on PropertyCode Header
      cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
      //Assert PropertyCode_Converted
      cy.get('#k-grid0-r1c22').should("have.text", "Converted");
    });
    it("Office_Availability_PropertyGroup_ Montreal Top 7 _Search", () => {
      //Click On PROPERTY CHARACTERISTICS tab
      cy.get('#mat-tab-label-0-3 > .mat-tab-label-content').click();
      //Click on PropertyGroup Dropdown
      cy.get("#mat-select-14").click();
      //Click On Montreal Top 7
      cy.get('#mat-option-144 > .mat-option-text').click();
      //Click On Search button
      cy.get(".mat-raised-button").click({ force: true });
      //Click on Column + Button
      cy.get(".search-column-button").click({ force: true });
      //Click on PropertyGroup Checkbox
      cy.get(".mat-checkbox-label").contains(" Property Group ").click({ force: true });
      //Click on Apply Button
      cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
      //Assert PropertyGroup_ Montreal Top 7 
      cy.get('#k-grid0-r1c22').should("have.text", "Montreal Top 7");
      //Click on PropertyGroup Header
      cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
      //Assert PropertyGroup_ Montreal Top 7 
      cy.get('#k-grid0-r1c22').should("have.text", "Montreal Top 7");
      //Click on PropertyGroup Header
      cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
      //Assert PropertyGroup_ Montreal Top 7 
      cy.get('#k-grid0-r1c22').should("have.text", "Montreal Top 7");
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
      cy.get('#k-grid0-r1c22').should('include.text', ' Elevator-Passenger: Yes ');
  
  
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
      cy.get('#mat-input-38').type("500");
      //enter Value in To
      cy.get('#mat-input-39').type("5000");
      //Click On Search button
      cy.get(".mat-raised-button").click({ force: true });
      //Click on Column + Button
      cy.get(".search-column-button").click({ force: true });
      //Click on  OfficeSize  Checkbox
      cy.get(".mat-checkbox-label").contains(" Office Size ").click({ force: true });
      //Click on Apply Button
      cy.get('[style="float: right"] > .mat-raised-button').click({ force: true, });
      //Click on OfficeSizes Header
      cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
      //Assert  OfficeSize 
      cy.get('#k-grid0-r1c22').should("have.text", "500\n                    sq. ft.");
      //Click on OfficeSize Header
      cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
      //Assert  OfficeSize
      cy.get('#k-grid0-r1c22').should("have.text", "5,000\n                    sq. ft.");
     
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
      cy.get('#k-grid0-r1c22').should("have.text", "500\n                              sq. ft.");
      //Click on TotalBuildingSize Header
      cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
      //Assert TotalBuildingSize
      cy.get('#k-grid0-r1c22').should("have.text", "5,000\n                              sq. ft.");
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
      cy.get('#k-grid0-r1c20').should("have.text", "1920");
      //Click on YearBuilt Header
      cy.get('#k-grid0-r0c20 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
      //Assert YearBuilt
      cy.get('#k-grid0-r1c20').should("have.text", "1930");
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
      cy.get('#k-grid0-r1c22').should("have.text", "500 : 1,000 sq. ft.");
      //Click on Parking Ratio Header
      cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true });
      //Assert Parking Ratio  
      cy.get('#k-grid0-r1c22').should("have.text", "500 : 1,000 sq. ft.");
    });
  */

  /*
    it("Office_Availability_Company/Contacts_InfoSource_Search", () => {
      //Click OnCompany/Contacts tab
      cy.get('#mat-tab-label-0-4 > .mat-tab-label-content').click();
      //Enter text in InfoSource
      cy.get('#mat-input-43').type('Richard Pillon')
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
      cy.get('#mat-input-44').type('Luke Slabczynski')
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
      cy.get('#mat-input-45').type('Matt Virgini')
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
      cy.get('#mat-input-46').type('ABC Plastics Moulding')
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
      cy.get('#mat-input-47').type('Lance Babcock Investments Limited')
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
      cy.get('#mat-input-48').type('Triovest Realty Advisors Inc')
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
      cy.get('#mat-input-49').type('Rabcon Contractors Ltd.')
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
      cy.get('#mat-input-50').type('Laura Leano')
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
      cy.get('#mat-input-51').type('Mark Gazda')
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
  */

  /*
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
      cy.get('#mat-option-52 > .mat-option-text').click();
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
  */
  /*
  it("Office_Availability_Size,Price,Timing_ListedOn_Search", () => {
    //Click On Size,Price,Timing tab
    cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
    //Click on Calender Icon
    cy.get('.mat-form-field-suffix.ng-tns-c9-103.ng-star-inserted').click()
  //click on YearDropdown
  cy.get("button[aria-label='Choose month and year']").click({ multiple: true })
  //Click on year
  cy.get('[aria-label="2022"] > .mat-calendar-body-cell-content').click()
  //click on month Jan
  cy.get('[aria-label="01/01/2022"] > .mat-calendar-body-cell-content').click()
  //Click On Date 
  cy.get('[aria-label="12/01/2022"] > .mat-calendar-body-cell-content').click()
  //Click on Calender Icon
  cy.get("div[class='mat-form-field-suffix ng-tns-c9-104 ng-star-inserted'] button[aria-label='Open calendar']").click()
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
  cy.get('[style="float: right"] > .mat-raised-button').click({force: true,});
  //Click on ListedOn Header
  cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
  //Assert ListedOn
  cy.get('#k-grid0-r1c22').should("include.text", "Jan 11, 2022"," Jan 12, 2022");
  //Click on ListedOn Header
  cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
  //Assert ListedOn
  cy.get('#k-grid0-r1c22').should("include.text", "Jan 5, 2023"," Jan 12, 2023");
  
  });
  
  it("Office_Availability_Size,Price,Timing_AvailableOn_Search", () => {
    //Click On Size,Price,Timing tab
    cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
    //Click on Calender Icon
    cy.get("div[class='mat-form-field-suffix ng-tns-c9-107 ng-star-inserted'] button[aria-label='Open calendar']").click()
  //click on YearDropdown
  cy.get('.mat-calendar-period-button > .mat-button-wrapper').click({ multiple: true })
  //Click on year
  cy.get('[aria-label="2022"] > .mat-calendar-body-cell-content').click()
  //click on month Jan
  cy.get('[aria-label="01/01/2022"] > .mat-calendar-body-cell-content').click()
  //Click On Date 
  cy.get('[aria-label="12/01/2022"] > .mat-calendar-body-cell-content').click()
  //Click on Calender Icon
  cy.get("div[class='mat-form-field-suffix ng-tns-c9-108 ng-star-inserted'] button[aria-label='Open calendar']").click()
  //click on YearDropdown
  cy.get('.mat-calendar-period-button > .mat-button-wrapper').click({ multiple: true })
  //Click on year
  cy.get('[aria-label="2023"] > .mat-calendar-body-cell-content').click()
  //click on month Jan
  cy.get('[aria-label="01/01/2023"] > .mat-calendar-body-cell-content').click()
  //Click On Date 
  cy.get('[aria-label="12/01/2023"] > .mat-calendar-body-cell-content').click()
    // Click On Search button
  cy.get(".mat-raised-button").click({ force: true });
  //Click on AvailableOn Header
  cy.get('#k-grid0-r0c8 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
  //Assert AvailableOn
  cy.get('#k-grid0-r1c8').should("include.text", "Feb 1, 2022"," Jan 12, 2022");
  
  });
  it("Office_Availability_Size,Price,Timing_MinDivisible_Search", () => {
    //Click On Size,Price,Timing tab
    cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
    //Enter Min Divisible value
    cy.get('#mat-input-58').type("15000")
    // Click On Search button
  cy.get(".mat-raised-button").click({ force: true });
  //Click on MinDivisible  Header
  cy.get('#k-grid0-r0c6 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
  //Assert MinDivisible
  cy.get('#k-grid0-r1c6').should("have.text", "15,000 sq. ft.")
  });
  
  it("Office_Availability_Size,Price,Timing_AskingGrossRent_Search", () => {
    //Click On Size,Price,Timing tab
    cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
    //Click On Asking Rental rate type Dropdown
    cy.get('#mat-select-20').click();
    //Click on Gross 
    cy.get('#mat-option-83').click();
   //Enter Value in From
   cy.get('#mat-input-59').type("1500");
   //Enter value in To
   cy.get('#mat-input-60').type("1700");
    // Click On Search button
  cy.get(".mat-raised-button").click({ force: true });
  //Click on AskingGrossRent Header
  cy.get('#k-grid0-r0c11 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
  //Assert AskingGrossRent 
  cy.get('#k-grid0-r1c11').should("have.text","$1,500.00");
  
  });
  it("Office_Availability_Size,Price,Timing_AskingSalePrice_Search", () => {
    //Click On Size,Price,Timing tab
    cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
   //Enter Value in From
   cy.get('#mat-input-61').type("30000");
   //Enter value in To
   cy.get('#mat-input-62').type("50000");
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
  cy.get('[style="float: right"] > .mat-raised-button').click({force: true,});
  //Click on AskingSalePrice Header
  cy.get('#k-grid0-r0c22 > .k-cell-inner > .k-link > .overflow-cell > .ngx-ellipsis-inner').click({ force: true })
  //Assert AskingSalePrice 
  cy.get('#k-grid0-r1c22').should("have.text","30,000.00");
   
  
  });
  
  */
});
