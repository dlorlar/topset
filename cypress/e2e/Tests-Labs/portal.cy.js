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
    it('Ensure user can make payments', () => {
        cy.get('.expanded > .material-icons').click() //payment
        cy.get('#Payment > .nav > :nth-child(1) > a').click() //single contribution
        cy.wait(10000)
        cy.get('#helptabs').click() //close pop-up
        cy.wait(20000)
        cy.get('.select2-selection__rendered[id="select2-ddlSEntry-container"]') //filter customer's name
        .type('Kehinde Certifier : 40983832481'); //customer name
        cy.get('#select2-ddlSEntry-container').should('be.visible', 'Kehinde Certifier : 40983832481')
        cy.get('.select2-results__option').click()
        cy.get('#Amountcontributed').type('250000', {force:true}) //contribution amount
        cy.get('#ddlMonth').select('March') //contribution month
        cy.get('#Year').select('2024') //contribution year
        cy.get('#paymentOption').select('Remitta') //payment method
        cy.get('#btnSEntry').click()
        cy.get('.swal2-confirm').click()
        cy.wait(18000)
        cy.get('.swal2-confirm').click()

    })
    it.only('Ensure user can apply for loan', () => {
        cy.get(':nth-child(3) > [data-toggle="collapse"] > p').click() //Loan
        cy.get('#credit > .nav > li > a').click() //Loan application
        cy.get('.select2-selection').click() //loan product
        cy.get('.select2-search__field').type('Home Renovation Loan : 04') //Loan product selection
        cy.get('.select2-search__field').should('be.visible','Home Renovation Loan : 04')
        cy.get('.select2-results__option--highlighted').click()
        cy.wait(5000)
        cy.get('#PrincipalAmount').type('1000000') //Loan Principal
        cy.get('#PrincipalAmount').should('be.visible','1000000')
        cy.get('#Purpose').type('Farming') //Loan Purpose
        cy.get('#btnwier').click() //Simulate Loan
        cy.get('.swal2-confirm').click() //Loan Eligibility
        cy.get('#btnReq').click() //Apply for loan
    })
    if('Ensure user can apply for refund successfully', () => {
        
    })
})  

    
    
    