describe("handle dropdown", () => {

    it.skip('dropdown with select', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html?src=homepage')

        cy.get('#zcf_address_country')
        .select('Italy')
        .should('have.value', 'Italy')

        cy.get('#zcf_users')
        .select('Yes, I currently sell online')
        .should('have.value', 'Yes, I currently sell online')
    })

    it('dropdown without select', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()
        
        cy.get('.select2-search__field').type('Iran').type('{enter}')

        cy.get('#select2-billing_country-container')
        .should('have.text', 'Iran')

       
    })

    it.skip('auto suggestion dropdown', () => {
        cy.visit('https://www.wikipedia.org/')

        cy.get('#searchInput').type('Delhi')
        
        cy.get('.suggestion-title').contains('Delhi Metro').click()

       
    })

    it.skip('automate dynamic dropdown', () => {
        cy.visit('https://www.gooogle.com/')

        cy.get('#APjFqb').type('cypress automation')

        cy.wait(3000)

        cy.get('div.wM6W7d').should('have.length', 13)
        
        cy.get('div.wM6W7d').each( ($el, index, $list)=>{
            if($el.text()=='cypress automation jobs')
            {
                cy.wrap($el).click()
            }
        })

        cy.get('#APjFqb').should('have.value', 'cypress automation jobs')

       
    })
})

    