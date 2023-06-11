import GridPage from "./pageObjects/Grid.page";

describe('template spec', () => {
    context("With no login", () => {
      beforeEach(() => {
        cy.visit('https://demoqa.com/selectable')
      });
      it("GRID", () => {
        //Click “Grid”
        GridPage.grid.click();
        //Click - “Two”, “Four”, “Six”, “Eight”
        GridPage.two.click();
        GridPage.four.click();
        GridPage.six.click();
        GridPage.eight.click();
        //Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
        GridPage.two.should("have.class","list-group-item active list-group-item-action");
        GridPage.four.should("have.class","list-group-item active list-group-item-action");
        GridPage.six.should("have.class","list-group-item active list-group-item-action");
        GridPage.eight.should("have.class","list-group-item active list-group-item-action");
        //Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
        GridPage.one.should("have.class","list-group-item list-group-item-action");
        GridPage.three.should("have.class","list-group-item list-group-item-action");
        GridPage.five.should("have.class","list-group-item list-group-item-action");
        GridPage.seven.should("have.class","list-group-item list-group-item-action");
        GridPage.nine.should("have.class","list-group-item list-group-item-action");
      });
    });
})