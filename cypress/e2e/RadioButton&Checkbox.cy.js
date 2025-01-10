describe('Check UI Element', () => {
    it.skip('Checking Radio Buttons', () => {
        cy.visit('https://example.cypress.io/commands/actions')

        //visibility of radio button
        cy.get('#optionsRadios1').should('be.visible')
        cy.get('#optionsRadios2').should('be.visible')

        //selecting radio button
        cy.get('#optionsRadios1').check().should('be.checked')
        cy.get('#optionsRadios2').should('not.be.checked')
        
        cy.get('#optionsRadios2').check().should('be.checked')
        cy.get('#optionsRadios1').should('not.be.checked')
    })   

    it('Checking Checkboxes', () => {
        cy.visit('https://example.cypress.io/commands/actions')

        //selecting of checkboxes
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check()
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('be.checked')

        //visibility of checkbox
        cy.get('.action-checkboxes [type="checkbox"]').should('be.visible')
        cy.get('.action-checkboxes [type="checkbox"]').should('be.visible')

        // additional assertions
        cy.get('.action-checkboxes [type="checkbox"]').should('have.length', 3)
        cy.get('.action-checkboxes [type="checkbox"]').should('not.have.class', 'hidden')

        //Unselecting Checkbox
        cy.get('.action-check [type="checkbox"]')
            .not('[disabled]')
                .uncheck()
        cy.get('.action-check [type="checkbox"]')
            .not('[disabled]')
            .should('not.be.checked')

         // additional assertions
        cy.get('.action-check [type="checkbox"]').should('not.have.class', 'selected')
        cy.get('.action-check [type="checkbox"]').should('have.attr', 'aria-checked', 'false')
    })
})