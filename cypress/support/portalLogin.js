Cypress.Commands.add('login', (username)=>{
    cy.fixture('portal').then((el)=>{
        cy.get(el.login).click()
        cy.get(el.usernameField).should('be.visible').type(username)
        cy.get(el.passwordField).should('be.visible').type(el.password)
        cy.get(el.loginButton).should('be.visible').click();
        cy.get(el.logoutButton).should('be.visible').click();
        //cy.get(el.staffnoField).should('be.visible').type(staffNo)
    })
})