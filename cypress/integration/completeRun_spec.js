/* eslint-disable no-undef */
const email = Math.floor(Math.random() * 10000000 + 10000000)

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

it("should check the about page", () => {
    cy.visit("http://localhost:8080/#/about");
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
})

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
          cy.get('button[type=button]').contains("Continue").click()
          cy.wait(10000)
      });
    });
    cy.wait(10000)
    // cy.get("#modal-center")
    cy.get("#h5-modal").contains("Mobile Validation").eq(0)
    cy.get("#p-modal").contains("Enter the code you recive on your mobile into the input field below.").eq(0)
    cy.get("input[id=input-modal]").type("1234567890").eq(0)
    cy.get("button[id=cancel-modal]").contains("Cancel").eq(0)
    cy.get("button[id=submit-code]").contains("Submit").click()
    cy.wait(10000)
})
it("should logout", () => {
cy.contains(".nav-item", "Options")
        cy.contains(".nav-item", "Link Account")
        cy.contains(".nav-item", "Remove Account")
        cy.contains(".nav-item", "User Profile")
        cy.contains(".nav-item", "Dashboard")
        cy.contains(".nav-item", "About Us")
        cy.contains(".nav-item", "Logout").click()
});

it("should do a complete run through test of the site.", () => {
    cy.visit("http://localhost:8080/#/login");
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
                cy.get('input[id=input-email]').type(`${email}@gmail.com`)
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
          cy.get('#login-button').eq(0).click()
          cy.wait(6000)
          // Add first FI accounts from BOW
    cy.visit("http://localhost:8080/#/add-account");
    cy.get("#h3-title").contains("Link Financial Institution")
    cy.get("#info-btn").contains("Instructions").click()
    cy.wait(1000)
    cy.get("#show-details-btn").contains("Show details").click()
    cy.contains("OK").click()
    cy.get("#input-3").select("Bank of WIT")
    cy.get("#input-1").type("kevokeeffe@gmail.com")
    cy.get("#input-2").type("123456")
    cy.get("#checkboxes-4").check({ force: true })
    cy.get('button[type=submit]').contains("Submit").click()
          cy.wait(25000)
// Add second FI accounts from Post Office
          cy.visit("http://localhost:8080/#/add-account");
    cy.get("#h3-title").contains("Link Financial Institution")
    cy.get("#info-btn").contains("Instructions")
    cy.get("#input-3").select("Post Office")
    cy.get("#input-1").type("kevokeeffe@gmail.com")
    cy.get("#input-2").type("123456")
    cy.get("#checkboxes-4").check({ force: true })
    cy.get('button[type=submit]').contains("Submit").click()
          cy.wait(25000)
// Select Post Office Account
          cy.get(".b-card-account").eq(0).click();
        cy.contains(".text-ac-details","Account Type:").eq(0)
        cy.contains(".text-ac-details","Balance: €").eq(0)
        cy.contains(".text-ac-details","IBAN:").eq(0)
        cy.contains(".text-ac-details","Account Name:").eq(0)
        cy.contains(".text-ac-details","Updated on").eq(0)
        cy.wait(3000)

        cy.get("#state-current").contains("Statement").click();
        cy.wait(30000)

        cy.contains("Statement")
        cy.contains("Transaction Amount")
        cy.contains("Updated Balance")
        cy.get("#ok-close-state").click();
        cy.wait(3000)

        cy.get('button[id=trans-current]').contains("Transfer").click()
        cy.wait(6000)

        cy.contains("Transfer Wizzard")
        cy.contains(`Welcome to the transfer wizzard.`)
        cy.contains("Close")
        cy.get('button[id=close-btn]').eq(0).click()
        cy.wait(3000)

        cy.get(".b-card-account").eq(0).click();
        cy.wait(3000)

        cy.get('button[id=trans-current]').contains("Transfer").click()
        cy.wait(3000)

        cy.get("button[id=trans-int]").contains("Internal Transfer").click();
        cy.wait(3000)

        cy.contains("Internal Transfer")
        cy.contains("Please select an account to transfer to:")
        cy.get('#b-form-select-account').select("Bank of WIT, Type: Current, IBAN: BOWIT9871088")
        cy.contains("Please enter the amount to transfer:")
        cy.get("#input-form").type("10")
        cy.contains("Maximum for this account is")
        cy.get("#checkbox-internal-transfer").check({ force: true })
        cy.wait(3000)

        cy.get('button[id=send-internal]').contains("Send").click()
        cy.wait(3000)

        // Remove FI accounts
        cy.visit("http://localhost:8080/#/remove-account");
        cy.contains("Remove Financial Institution")
        cy.contains("Financial Instutition:")
        cy.get('#input-remove').select("Bank of WIT")
        cy.wait(3000)
        cy.get("#cb-remove").check({ force: true })
        cy.get('button[id=remove-btn]').contains("Remove").click()
        cy.wait(3000)
        cy.contains("Delete")
        cy.contains("Are you sure you wish to delete this account!")
        cy.get('button[id=btn-no]').contains("No")
        cy.get('button[id=btn-delete]').contains("Delete").click()

        cy.visit("http://localhost:8080/#/user-profile");
        cy.contains("Name:")
        cy.contains("E-mail:")
        cy.get('button[id=delete-acc-btn]').contains("Delete Account").click()
        cy.wait(3000)
        cy.contains("Delete Account")
        cy.contains("Are you sure about this? There is no going back!")
        cy.get("#cb-delete").check({ force: true })
        cy.get('button[id=btn-d-delete]').contains("Delete").click()
});
})