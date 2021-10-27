/// <reference types="Cypress" />

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("input[name='email']").click().type("challenge@alkemy.org");
    cy.get("input[name='password']").click().type("react");
    cy.get("button[type='submit']").click();
  });
  it("Home page can be opened", () => {
    cy.contains(/superheroes/gi);
    cy.contains(/challenge/gi);
  });
});
