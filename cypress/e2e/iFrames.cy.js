import 'cypress-iframe'

describe('handling frames', () => {
    it('approach 1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe=cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type("Hello World!")
    })

    it('approach 2 custom command', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe('#mce_0_ifr').clear().type("Welcome {cmd+a}")
        cy.get("[aria-label=Bold]").click();

        
    })

    it.only('approach 3 iframe plugin', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('mce_0_ifr').clear().type("Welcome {cmd+a}")
        cy.get("[aria-label=Bold]").click();

        
    })
})