const url = Cypress.env('portal')

describe('NHF Portal Test', () => {
    beforeEach(() => {
        //cy.loginByToken('your-token-value');
        cy.restoreLocalStorage();
        cy.visit(url)
        cy.fixture('portal').then((el) => {
            cy.get(el.usernameField).type(el.username)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.btnLogin).click()
            cy.wait(10000)
            //cy.get(el.btnLogout).click();
            //cy.get('.title').should('be.visible')
            //cy.wait(2000)
        })    
        
    })
    it.skip('Registration', () =>{
        cy.get("#login-form > div > div:nth-child(4) > a").click() //create new account
        cy.wait(3000)
        cy.get("#ChooseCategory").select('Individual Contributor') //select account type
        cy.get('#email').type('dymi88@yahoo.com') //email address
        cy.get('#mobile').type('09123456789') //mobile number
        cy.get('#bvn').type('22222222222') //bvn
        cy.get('#bvnConsent').click() //bvn consent
        cy.wait(5000)
        cy.get('.swal2-confirm').click() //email,phone or bvn already exist

    })
    it('Payments', () => {
        cy.get('.expanded > .material-icons').click() //payment
        cy.get('#Payment > .nav > :nth-child(1) > a').click() //single contribution
        cy.get('#ddlSEntry').select('Kehinde Certifier')
    })
})  

    
    
    