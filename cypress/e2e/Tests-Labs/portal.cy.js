import 'cypress-iframe'
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
    it.only('Ensure user can make PAYMENT', () => {
        cy.get('.expanded > .material-icons').click() //payment
        cy.get('#Payment > .nav > :nth-child(1) > a').click() //single contribution
        cy.wait(10000)
        cy.get('#helptabs').click() //close pop-up
        cy.wait(20000)
        cy.get('.select2-selection__rendered[id="select2-ddlSEntry-container"]') //filter customer's name
        .type('Ernest regoeng : 40983833747'); //customer name
        cy.get('#select2-ddlSEntry-container').should('be.visible', 'Ernest regoeng : 40983833747')
        cy.get('.select2-results__option').click()
        cy.get('#Amountcontributed').type('50000', {force:true}) //contribution amount
        cy.get('#ddlMonth').select('March') //contribution month
        cy.get('#Year').select('2024') //contribution year
        //cy.get('#paymentOption').select('Remitta') //payment method Remitta
        cy.get('#paymentOption').select('ETranzact') //payment method ETranzact
        cy.get('#btnSEntry').click()
        cy.get('.swal2-confirm').click()
        cy.wait(18000)
        cy.get('.swal2-confirm').click()
        cy.get('.credo--widget_input-wrapper > input').type('4000 0000 0000 0002') //ETranzact details
        cy.get(':nth-child(1) > input').type('03/50')
        cy.get('.sc-blmCWO > :nth-child(2) > input').type('123')
        cy.get('form > button').click()
        cy.wait(5000)
        //cy.get("#root > div > main > div > div > div.sc-iBdoyZ.eJJHdi > div > iframe", `tr>td>input[type=submit]`).click();
        //cy.get('iframe').click();
        //cy.get('tr>td>input[type=submit]').click();
        cy.frameLoaded("Iframe[name='credoPaymentFrame']")
        cy.iframe().contains('Submit').click();


    })
    it('Ensure user can apply for LOAN', () => {
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
    it('Ensure user can apply for REFUND successfully', () => {
        cy.get(':nth-child(4) > [data-toggle="collapse"] > p').click() //Refund side menu
        cy.get('#Refunds > .nav > li > a').click() //Apply for refund
        cy.get('#select2-Conditiontoapply3-container').click() //condition for application
        cy.get('#select2-Conditiontoapply3-results')
        cy.get("#select2-Conditiontoapply3-results > li:nth-child(3)").click()
        cy.wait(8000)
        //cy.get('#forwardtoapplication').click() //Proceed
    })
})  

    
    
    