const url = Cypress.env('credit360')

describe('Credit 360 Application', () => {
    beforeEach(() => {
        cy.loginByToken('your-token-value');
        cy.restoreLocalStorage();
        cy.visit(url)
        cy.fixture('credit').then((el) => {
            cy.get(el.usernameField).type(el.username)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.btnLogin).click()
            //cy.get('.title').should('be.visible')
            //cy.wait(2000)
        })    
        
    })
    it('Credit Origination', () =>{
        cy.get('ng-tns-c5-132').click()
    })    
})  

    
    
    