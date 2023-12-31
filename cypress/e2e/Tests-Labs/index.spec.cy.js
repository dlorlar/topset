const users = Cypress.env('USERS')
const url = Cypress.env('topUrl')

describe('login to saucedemo site', () => {

    beforeEach(() => {
        cy.visit(url)
    })
  it('should login as a standard user', () => {
      cy.login(users['standard']);
      cy.url().should('include', '/inventory.html')
  })
  
  it('should login as a locked user', () => {
      cy.login(users['locked'])
      cy.get('[data-test="error"]').should('be.visible')
  })

  it('should login as a problem user', () => {
      cy.login(users['problem'])
      cy.url().should('include', '/inventory.html')
  })

  it('should login as a glitch user', () => {
      cy.login(users['glitch'])
      cy.url().should('include', '/inventory.html')
  })
})