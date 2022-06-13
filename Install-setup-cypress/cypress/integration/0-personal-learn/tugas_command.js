/// <reference types="cypress" />

describe('Tugas Custome Command Paybills Zerobank', () => {
    it('As a user, I can login and do the paybills on the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')

        cy.fixture("userzero").then(userzero => {
            const username = userzero.username
            const password = userzero.password
            cy.zerologin(username, password)
            })
        cy.get('#pay_bills_tab').click()
        cy.get('#sp_payee').select('apple')
        cy.get('#sp_account').select('1')
        cy.fixture("paybills").then(paybills => {
            const amount = paybills.amount
            const date = paybills.date
            const desc = paybills.desc
        cy.bills(amount, date, desc)
            })
        });
    });
