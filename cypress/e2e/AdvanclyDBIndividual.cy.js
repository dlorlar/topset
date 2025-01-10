describe('Advancly Digital Bank Test', ()=>{
    beforeEach(()=>{
        cy.visit('https://advancly-funder2.staging.vggdev.com/') //master3
        cy.url().should('include', 'funder2.staging.vggdev.com')
        cy.get(".tw-text-primary").click()
        cy.get("input[placeholder='morty@ricknmorty.com']").type('petr@yopmail.com') //individual email
        cy.get("input[placeholder='********']").type('P@ssword01') //individual password
        cy.get("button[type='button']").click()
        cy.wait(10000)
        cy.get("div[class='page-title']").contains( 'OLUWADAMILOLA')
                                        
    })

    it.skip('Ensure customer can perform transfer transaction successfully ', () =>{
        cy.get(".btn.btn-primary.px-4").click() //pay button
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)").click() // transfer option
        cy.xpath("(//p[normalize-space()='Choose bank'])[1]").click() //choose bank
        cy.get("#search").type('Advancly').should('be.visible') // search for bank
        cy.get('.NGNTransferDrawerBankList_bank_name__voM46').click() //Advancly MFB
        cy.get('#normal_login_source_account').click()
        cy.get('body > div:nth-child(7) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').click()
        //cy.get('').select()
        //cy.get("(//span[normalize-space()='9029800948 - NGN 20,000'])[1]").select()
    })

    it('Ensure customer purchase airtime and data successfully', () =>{
        cy.get(".btn.btn-primary.px-4").click() //pay button
        cy.xpath("(//p[normalize-space()='Airtime and Data'])[1]").click()  //airtime and data option
        cy.get('.choose_heading').click() //choose provider
        cy.get("#search").type('mtn nigeria').should('be.visible') // search for network
        cy.wait(3000)
        cy.xpath("(//p[normalize-space()='MTN NIGERIA'])[1]").click() // MTN NIGERIA
        cy.get(".ant-tabs-tab.ant-tabs-tab-active").click() //airtime option
        //cy.get('#rc-tabs-0-tab-data').click() //data option
        cy.get('#normal_login_source_account',{force:true}).click()
        cy.get('.ant-select-item.ant-select-item-option.ant-select-item-option-active.ant-select-item-option-selected').click()
        //cy.wait(50000)
        //cy.get
        cy.get('#normal_login_beneficiaryPhoneNumber'),{force:true}.type('9023499034').should('have.value', '9023499034') // enter  phone number
        cy.get('#normal_login_amount').type('500').should('have.value', '500') //  enter amount
        cy.get("button[type='submit']").click() //  submit button
    })

})