/// <reference types="Cypress" />

describe("Login page user: not logged", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("login page can be opened", () => {
    cy.contains("Login");
    cy.contains("Email");
    cy.contains("Password");
  });
  it("redirect is working from '/search'", () => {
    cy.contains("Login");
  });
  it("redirect is working from '/'", () => {
    cy.contains("Login");
  });
});
