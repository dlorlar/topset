Cypress.Commands.add('login', (username)=>{
    cy.fixture('details').then((el)=>{
        cy.get(el.login).should('be.visible').click()
        cy.get(el.usernameField).should('be.visible').type(username)
        cy.get(el.passwordField).should('be.visible').type(el.password)
        cy.get(el.loginButton).should('be.visible').click();
    })
})