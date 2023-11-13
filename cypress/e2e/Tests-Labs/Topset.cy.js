/// <reference types = 'cypress' />

const url = Cypress.env('topUrl')

describe('Login Functionality', () => {

    beforeEach(() => {

        cy.visit(url)

    })

    it('Successful login with valid credentials', () => {
        cy.fixture('elements').then((el) => {
            cy.get(el.emailField).type(el.email)
            cy.get(el.passwordField).type(el.password)
            //cy.get(el.btnLogin).click()
            //cy.wait(2000)
        })

    })

    it('Unsuccessful login with invalid credentials', () => {
        cy.fixture('elements').then((el) => {
            cy.get(el.emailField).type(el.wrongEmail)
            cy.get(el.passwordField).type(el.wrongPassword)
            cy.get(el.btnLogin).click()
            cy.get(el.alert).should('be.visible').contains('Invalid login details')
            cy.wait(2000)
        })
    })

    it('Error message displayed when the required fields are left blank', () => {
        cy.fixture('elements').then((el) => {
            cy.get(el.emailField).type(el.email)
            cy.get(el.passwordField).type('{backspace}')
            cy.get(el.btnLogin).click()
            cy.get(el.invalidAlert).should('be.visible').contains('Password is required')
            
        })
    })

    it('Error message displayed when the password does not meet the minimum length requirement', () => {
        cy.fixture('elements').then((el) => {
            cy.get(el.emailField).type(el.email)
            cy.get(el.passwordField).type(el.wrongPassword)
            cy.get(el.btnLogin).click()
            cy.get(el.alert).should('be.visible').contains('Invalid login details')
        })
    })
})


