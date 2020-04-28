/* eslint-disable no-undef */
describe('Testing application', () => {
  
  it('should do a complete run through test of the site.', () => {
    cy.visit('http://localhost:8080/#/login')
    cy.get('.container-authyLogin').eq(0)
    cy.get('.b-jumbotron-login').eq(0)
    cy.get('.h1-login')
      .eq(0)
      .should('contain', 'Login')

    cy.get('#input-group-email').eq(0)
    cy.get('#input-email').eq(0)
    cy.get('input[id=input-email]').type(`test1@gmail.com`)
    cy.get('#input-password-group').eq(0)
    cy.get('#input-password').eq(0)
    cy.get('input[id=input-password]').type('123456')
    cy.wait(2000)

    cy.get('button[id=press-me]').contains("Continue").click()

    cy.wait(20000)
    cy.get('#modal-center-1')
    cy.get('.p-log').eq(0)
    cy.get('#vCode-input')
      .eq(0)
      .type('102938')
    cy.get('#login-button')
      .eq(0)
      .click()
    cy.wait(6000)
    // Add first FI accounts from BOW
    cy.visit('http://localhost:8080/#/add-account')
    cy.get('#h3-title').contains('Link Financial Institution')
    cy.get('#info-btn')
      .contains('Instructions')
      .click()
    cy.wait(1000)
    cy.get('#show-details-btn')
      .contains('Show details')
      .click()
    cy.contains('OK').click()
    cy.get('#input-3').select('Bank of WIT')
    cy.get('#input-1').type('kevokeeffe@gmail.com')
    cy.get('#input-2').type('123456')
    cy.get('#checkboxes-4').check({ force: true })
    cy.get('button[id=submit-details-add-acc]')
      .contains('Submit')
      .click()
    cy.wait(15000)
    // Add second FI accounts from Post Office
    cy.visit('http://localhost:8080/#/add-account')
    cy.get('#h3-title').contains('Link Financial Institution')
    cy.get('#info-btn').contains('Instructions')
    cy.get('#input-3').select('Post Office')
    cy.get('#input-1').type('kevokeeffe@gmail.com')
    cy.get('#input-2').type('123456')
    cy.get('#checkboxes-4').check({ force: true })
    cy.get('button[id=submit-details-add-acc]')
      .contains('Submit')
      .click()
    cy.wait(15000)
    // Select Post Office Account
    cy.get('.b-card-account')
      .eq(0)
      .click()
    cy.contains('.text-ac-details', 'Account Type:').eq(0)
    cy.contains('.text-ac-details', 'Balance: €').eq(0)
    cy.contains('.text-ac-details', 'IBAN:').eq(0)
    cy.contains('.text-ac-details', 'Account Name:').eq(0)
    cy.contains('.text-ac-details', 'Updated on').eq(0)
    cy.wait(1000)

    cy.get('#state-current')
      .contains('Statement')
      .click()
    cy.wait(30000)

    cy.contains('Statement')
    cy.contains('Transaction Amount')
    cy.contains('Updated Balance')
    cy.get('#ok-close-state').click()
    cy.wait(1000)

    cy.get('button[id=trans-current]')
      .contains('Transfer')
      .click()
    cy.wait(1000)

    cy.contains('Transfer Wizzard')
    cy.contains(`Welcome to the transfer wizzard.`)
    cy.contains('Close')
    cy.get('button[id=close-btn]')
      .eq(0)
      .click()
    cy.wait(1000)

    cy.get('.b-card-account')
      .eq(0)
      .click()
    cy.wait(1000)

    cy.get('button[id=trans-current]')
      .contains('Transfer')
      .click()
    cy.wait(1000)

    cy.get('button[id=trans-int]')
      .contains('Internal Transfer')
      .click()
    cy.wait(1000)

    cy.contains('Internal Transfer')
    cy.contains('Please select an account to transfer to:')
    cy.get('#b-form-select-account').select(
      'Bank of WIT, Type: Current, IBAN: BOWIT9871088'
    )
    cy.contains('Please enter the amount to transfer:')
    cy.get('#input-form').type('10')
    cy.contains('Maximum for this account is')
    cy.get('#checkbox-internal-transfer').check({ force: true })
    cy.wait(1000)

    cy.get('button[id=send-internal]')
      .contains('Send')
      .click()
    cy.wait(1000)

    // Remove FI accounts
    cy.visit('http://localhost:8080/#/remove-account')
    cy.contains('Remove Financial Institution')
    cy.contains('Financial Instutition:')
    cy.get('#input-remove').select('Bank of WIT')
    cy.wait(1000)
    cy.get('#cb-remove').check({ force: true })
    cy.get('button[id=remove-btn]')
      .contains('Remove')
      .click()
    cy.wait(1000)
    cy.contains('Delete')
    cy.contains('Are you sure you wish to delete this account!')
    cy.get('button[id=btn-no]').contains('No')
    cy.get('button[id=btn-delete]')
      .contains('Delete')
      .click()

    cy.visit('http://localhost:8080/#/user-profile')
    cy.contains('Name:')
    cy.contains('E-mail:')
    cy.get('button[id=delete-acc-btn]')
      .contains('Delete Account')
      .click()
    cy.wait(1000)
    cy.contains('Delete Account')
    cy.contains('Are you sure about this? There is no going back!')
    cy.get('#cb-delete').check({ force: true })
    cy.get('button[id=btn-d-delete]')
      .contains('Delete')
  })
})
