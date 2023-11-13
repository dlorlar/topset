/// <reference types = 'cypress' />
const url = Cypress.env('erpUrl')

describe('Fixed Asset Test', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit(url);
    })  
    
    it('Successful Login', () => {
        cy.fixture('details').then((el) => {
            cy.get(el.login).click();
        })
    })
})        
       