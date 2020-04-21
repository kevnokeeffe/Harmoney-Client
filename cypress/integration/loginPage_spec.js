/* eslint-disable no-undef */
describe('Testing the login page', () => {
  before(() => {
    cy.visit('http://localhost:8080/#/login')
  })

  it('should check login elements', () => {
    cy.get('.container-authyLogin')
      .eq(0)
      .within(() => {
        cy.get('.b-jumbotron-login')
          .eq(0)
          .within(() => {
            cy.get('.h1-login')
              .eq(0)
              .should('contain', 'Login')

            cy.get('#input-group-email').eq(0)
            cy.get('#input-email').eq(0)
            cy.get('input[id=input-email]').type('kevokeeffe@gmail.com')
            cy.get('#input-password-group').eq(0)
            cy.get('#input-password').eq(0)
            cy.get('input[id=input-password]').type('123456')
            cy.get('button[type=button]').eq(0).click()
            cy.wait(6000)
          })
      })
    cy.get('#modal-center').eq(0)
    cy.get('.p-log').eq(0)
    cy.get('#vCode-input')
      .eq(0)
      .type('102938')
      //cy.get('#login-button').eq(0).click()
      //cy.wait(10000)
      //cy.contains(".b-nav-item", "Logout").click();
  })
})