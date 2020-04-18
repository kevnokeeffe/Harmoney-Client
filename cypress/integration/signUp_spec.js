/* eslint-disable no-undef */


describe("Testing the sign-up page", () => {
    before(() => {
        cy.visit("http://localhost:8080/#/sign-up");
      });

      it("should the jumbotron", () => {
        cy.get(".container-signUp")
          .eq(0)
          .within(() => {
            cy.get(".b-jumbotron-signUp")
            .eq(0)
            .within(() => {
              cy.get(".h1-register")
              .eq(0)
              .should("contain","Sign-Up")
              
                cy.get("#input-group-fName")
                .eq(0)
                .within(() => {
                  cy.get("#input-fName")
                  cy.get("input[data-test=fName]").type("Kevin");
                });
                cy.get("#input-group-lName")
                .eq(0)
                .within(() => {
                  cy.get("#input-lName")
                  cy.get("input[id=input-lName]").type("O'Keeffe");
                });
                cy.get(".b-form-group-email")
                .eq(0)
                .within(() => {
                  cy.get(".form__input")
                  cy.get("input[id=email]").type("kevokeeffe@gmail.com");
                });


                cy.get("#vue-tel")
                .eq(0)
                .within(() => {
                  cy.get("#vue-tel-input")
                  //cy.get("vue-tel-input[id=vue-tel-input]").type("0852069520");
                });

                cy.get("#input-group-password")
                .eq(0)
                .within(() => {
                  cy.get("#text-password")
                  cy.get("input[id=text-password]").type("1234567890");
                });

                cy.get("#input-group-checkboxes")
                .eq(0)
                cy.get("button[type=reset]").click();
            });
          });
      });
})