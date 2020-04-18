/* eslint-disable no-undef */
describe("Testing the home page", () => {
    before(() => {
      cy.visit("http://localhost:8080/");
    });

    it("should find all elements on the home page", () => {
        cy.get(".top-one")
        .eq(0)
        .within(() => {
        cy.get(".overlay")
        .eq(0)
        .within(() => {
        cy.get(".h1")
          .eq(0)
          .should("contain", "Welcome");
          cy.get(".h5")
          .eq(0)
          .should("contain", "to");
          cy.get(".h2")
          .eq(0)
          .should("contain", "Harmon€y");
      });
      cy.get(".vue-particles")
      .eq(0)
    });
});

});