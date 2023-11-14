const url = Cypress.env('cbaUrl')

describe('Core Banking Application Test', () => {

    it('Open Url', () => {
        //cy.restoreLocalStorage();
        cy.visit(url)
        //cy.url(url).should('include', '/Account/Login?ReturnUrl=%2F')
        cy.get('#EmployeeRegHelp > .modal-dialog > .modal-content > .modal-header > #helptabs > .fa').click()

        cy.fixture('cba').then((el) => {
            cy.get(el.emailField).type(el.email)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.btnLogin).click()
            //cy.get('[The Core Banking 2.0"]').should('be.visible')
            //cy.wait(2000)
        })
        cy.get(':nth-child(4) > [data-toggle="collapse"] > p').click()
        cy.get('#selfservice > .nav > :nth-child(3) > a > p').click()
        cy.get('h3.mb-4').should('be.visible')
        cy.get('#name').type('Damilola Ogunlusi')
        cy.get('#email').type('dymi@yahoo.com')
        cy.get('#subject').type('This is a drill')
        cy.get('#message').type('I am testing the feedback form')
        cy.get('#btnFeedback').click()
        cy.get('.swal2-cancel').click()
        cy.get(':nth-child(2) > :nth-child(1) > a > p').click()
    })
  
})