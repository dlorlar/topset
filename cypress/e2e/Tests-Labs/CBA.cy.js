const url = Cypress.env('cbaUrl')

describe('Core Banking Application Test', () => {
    beforeEach(() => {

        cy.restoreLocalStorage();
        cy.visit(url)
        cy.fixture('cba').then((el) => {
            cy.get(el.usernameField).type(el.username)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.btnLogin).click()
            //cy.get('.title').should('be.visible')
            //cy.wait(2000)
        })

    })

    //it('Open Url', () => {
        
        //cy.url(url).should('include', '/Account/Login?ReturnUrl=%2F')
        //cy.get('#EmployeeRegHelp > .modal-dialog > .modal-content > .modal-header > #helptabs > .fa').click()

        
        
        //cy.get(':nth-child(4) > [data-toggle="collapse"] > p').click()
        //cy.get('#selfservice > .nav > :nth-child(3) > a > p').click()
        //cy.get('h3.mb-4').should('be.visible')
        //cy.get('#name').type('Damilola Ogunlusi')
        //cy.get('#email').type('dymi@yahoo.com')
        //cy.get('#subject').type('This is a drill')
        //cy.get('#message').type('I am testing the feedback form')
        //cy.get('#btnFeedback').click()
        //cy.get('.swal2-cancel').click()
        //cy.get(':nth-child(2) > :nth-child(1) > a > p').click()

    it('Register Staff', () => {
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('#adminSetup > .nav > :nth-child(1) > a').click()
        cy.get('#StaffNo').type('38849')
        cy.get('#StaffName').type('Suleiman Aminu Yabagi')
        cy.get('#select2-ddlCompany-container').click()
        cy.get('[aria-selected="false"]').click()
        cy.get('[data-select2-id="274"] > :nth-child(2)').select()
        //cy.get('#select2-ddlBranch-container').click()
        //cy.get('#select2-ddlBranch-results').should('be.visible','FCT 1').click()
    })
  
})