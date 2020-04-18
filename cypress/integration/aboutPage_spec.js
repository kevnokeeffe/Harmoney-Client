/* eslint-disable no-undef */
describe("Testing the sign-up page", () => {
    before(() => {
        cy.visit("http://localhost:8080/#/about");
    });
        it("should find and check contents", () => {
            cy.get(".on-top")
              .eq(0)
              .within(() => {
                cy.get(".overlay-about")
                .eq(0)
                .within(() => {
                    cy.get(".about-jumbo")
                    .eq(0)
                    .within(() => {
                        cy.get("#cont-1")
                        .eq(0)
                        cy.get("#h1-ab")
                        .eq(0)
                        .should("contain","About Us")
                        cy.get("#p-abt")
                        .eq(0)
                        .should("contain","Harmon€y is an exciting new smart banking service. An all-in-one hub that allows users to open a Harmon€y account in minutes, and link all existing bank accounts. This unique experience allows users to synchronise all of their financial accounts (bank, credit union, post office, loan and mortgage accounts) in one application, providing you with a simple, fast and secure way of managing your finances, getting personalised insights into your spending, and receiving meaningful rewards and tailored financial solutions.")
                        cy.get("#p-abt-2")
                        .eq(0)
                        .should("contain","Our ultimate goal is for our users to better understand their saving, spending and investing habits and to make Banking beautiful, simple and accesible to everyone.")
                    });
              });
          });

    });

});