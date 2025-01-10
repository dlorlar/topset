describe('Funding Wema Integration Test', ()=>{
    
    beforeEach(()=>{
        cy.restoreLocalStorage();
        //cy.visit('https://advancly-admin.test.vggdev.com')
        cy.visit('https://advancly-admin-sprint4.test.vggdev.com')
        cy.wait(5000)
        //cy.url().should('include', 'admin.test.vggdev.com')
        cy.url().should('include', 'admin-sprint4.test.vggdev.com')
        cy.get('#username').type('nora@yopmail.com')
        cy.get('#password').type('P@ssword01')
        cy.get('.login-button').click()
        cy.wait(6000)
    })

    it.only('View an aggregator details', ()=>{
        cy.get('.Hamburger').should('be.visible').click() // hamburger icon
        cy.get('#funding-menu > #loans > .parent-menu > .menu-title').click() //funding side menu
        cy.get('#funding-menu > :nth-child(2) > .sub-menu-item > a > .link-text').click() //funding sub menu
        cy.get('tbody tr:nth-child(6) td:nth-child(9) span:nth-child(1)').click() //view aggregator details
        cy.get('#wallet_details').click() //view wallet details
        cy.wait(5000)
        cy.get('.walletdetails_Refresh__2unUm').click()
        cy.wait(12000)
        cy.get('#request_fund').click() //view request funds
        cy.get('.fa.fa-times-circle.fa-2x').click() //close modal
    })

    it('Create Funding Wallet', ()=>{
        cy.get('.Hamburger').should('be.visible').click() // hamburger icon
        cy.get('#funding-menu > #loans > .parent-menu > .menu-title').click() //funding side menu
        cy.get('#funding-menu > :nth-child(2) > .sub-menu-item > a > .link-text').click() //funding sub menu
        cy.get('.btn.advancly-btn.btn-md.m-0').click() //create funding wallet
        cy.wait(3000)
        cy.get('.CustomSelect_selectBox__voRWc.undefined').select('Wema').should('have.value', '2') //select funding partner
        cy.get('.css-ackcql')
            .type('Dase')
            .should('be.visible') //select aggregator
        cy.get('#react-select-2-option-0').click()
        cy.get('.css-ackcql').should('have.value', '') //no value or text
        cy.wait(12000)
        cy.get('.ml-3.btn.advancly-btn').click()
        cy.wait(5000)
        cy.get('.m-t-1 > .btn').click()
    })
})