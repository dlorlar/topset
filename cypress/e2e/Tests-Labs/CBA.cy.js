describe('Core Banking Application Test', () => {

    beforeEach(() => {
        cy.restoreLocalStorage();
        cy.visit('https://testcorebanking.fmbn.gov.ng:4450/');
        cy.get('#EmployeeRegHelp > .modal-dialog > .modal-content > .modal-header > #helptabs > .fa').click()
      });
    

    //it.only('Navigate URL', () => {
        //cy.visit('https://testcorebanking.fmbn.gov.ng:4450/')
        //cy.get('#EmployeeRegHelp > .modal-dialog > .modal-content > .modal-header > #helptabs > .fa').click()
        //cy.url().should('include', '/Account/Login?ReturnUrl=%2F')
    //})
    it('Successful Login to the application', () => {
        cy.get('#login-username2').type('dharmelorlar88@gmail.com');
        cy.get('#Password').type('Testing10$');
        cy.get('#btnSubmit').click();
        
        //cy.get('[The Core Banking 2.0"]').should('be.visible')

    })
})