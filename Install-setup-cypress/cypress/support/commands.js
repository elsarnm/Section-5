// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => { 
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username)
    cy.get('#password').clear()
    cy.get('#password').type(password)
    cy.get('#login-button.submit-button.btn_action').click()
});

Cypress.Commands.add('zerologin', (username, password) => { 
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('input[name="user_remember_me"]').not('[disabled]')
          .check().should('be.checked')
    cy.get('.btn.btn-primary').click()
});

Cypress.Commands.add('bills', (amount, date, desc) => { 
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#sp_amount').type(amount)
    cy.get('#sp_date').type(date)
    cy.get('.ui-state-default.ui-state-highlight.ui-state-active').click()
    cy.get('#sp_description').type(desc)
    cy.get('#pay_saved_payees').click()
});