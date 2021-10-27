/// <reference types="Cypress" />

describe("End to end - Login, search heroes, go home, delete all", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Add 6 heroes from searching: 'super' and 'venom' and return to home to see which heroes where added", () => {
    cy.get("input[name='email']").click().type("challenge@alkemy.org").blur();
    cy.get("input[name='password']").click().type("react");
    cy.get("button[type='submit']").click();

    cy.contains(/Superheroes challenge/gi);
    cy.contains(/home/gi);
    cy.contains(/add/gi);

    cy.get("#responsive-navbar-nav").within(() => {
      cy.get("a[href='/search']").click();
    });

    cy.get('input[name="search"]').click().blur();
    cy.get("div[role='alert']");

    cy.get('input[name="search"]').click().type("super");
    cy.get("button[type='submit']").click();

    cy.get("div.pb-5").within(() => {
      cy.get("button.btn-primary").click({ multiple: true });
    });

    cy.get('input[name="search"]').click().clear().type("venom");
    cy.get("button[type='submit']").click();
    cy.get("div.pb-5").within(() => {
      cy.get("button.btn-primary").click({ multiple: true });
    });

    cy.get("#responsive-navbar-nav").within(() => {
      cy.get("a[href='/']").click();
    });

    cy.get("div.h-100").should("have.length", 6);

    cy.get("div.h-100").within(() => {
      cy.contains(/super/gi);
      cy.contains(/venom/gi);
    });

    cy.get("div.h-100")
      .find("button.btn-outline-danger")
      .click({ multiple: true });

    cy.get("div.h-100").within(() => {
      cy.contains(/add hero/gi);
    });
  });
});
