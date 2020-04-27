/* eslint-disable no-undef */
const email = Math.floor(Math.random() * 10000000 + 10000000)

describe("Testing application", () => {

it("should create a new user", () => {
    cy.visit("http://localhost:8080/#/sign-up");

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
            cy.get("input[id=email]").type(`${email}@gmail.com`);
          });


          cy.get("#vue-tel")
          .eq(0)
          .within(() => {
            cy.get("#vue-tel-input").type("0852069520");
          });

          cy.get("#input-group-password")
          .eq(0)
          .within(() => {
            cy.get("#text-password")
            cy.get("input[id=text-password]").type("123456");
          });
          cy.get("#input-group-password-re")
          .eq(0)
          .within(() => {
            cy.get("#text-password-re")
            cy.get("input[id=text-password-re]").type("123456");
          });

          cy.get("#input-group-checkboxes").eq(0)
          cy.get("#b-checkbox-tnc").check({ force: true })
          .eq(0)
          cy.wait(2000)
          cy.get('button[type=button]').contains("Continue").click()
          cy.wait(10000)
      });
    });
    // cy.get("#p-modal").contains("Enter the code you recive on your mobile into the input field below.").eq(0)
    // cy.get("input[id=input-modal]").type("1234567890").eq(0)
    // cy.get("button[id=cancel-modal]").contains("Cancel").eq(0)
    // cy.get("button[id=submit-code]").contains("Submit").click()
    // cy.wait(10000)
});
});