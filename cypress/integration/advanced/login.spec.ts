/// <reference types="Cypress" />

describe("Login page user: not logged", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Required email", () => {
    cy.get("input[name='email']").click().blur();
    cy.contains(/required/gi);
  });
  it("Required password", () => {
    cy.get("input[name='password']").click().blur();
    cy.contains(/required/gi);
  });
  it("Invalid email, user type '1'", () => {
    cy.get("input[name='email']").click().type("1").blur();
    cy.contains(/invalid/gi);
  });
  it("Invalid email, user type 'app.com'", () => {
    cy.get("input[name='email']").click().type("app.com").blur();
    cy.contains(/invalid/gi);
  });

  it("Invalid user credentials", () => {
    cy.get("input[name='email']").click().type("challenge@gmail.org").blur();
    cy.get("input[name='password']").click().type("react");
    cy.get("button[type='submit']").click();

    cy.contains(/try again/gi);
  });

  it("Valid user credentials", () => {
    cy.get("input[name='email']").click().type("challenge@alkemy.org").blur();
    cy.get("input[name='password']").click().type("react");
    cy.get("button[type='submit']").click();

    cy.contains(/Superheroes challenge/gi);
  });
});
