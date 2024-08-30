describe('Login Functionality', () =>{

    beforeEach(() => {

        //Visit the login page before each test
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
    })

    it('should successfully login with valid credentials', () => {
        //Enter a valid username
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    
        //Enter a valid password
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    
        //Click the login button
        cy.get('.oxd-button').click()
    })
    
})

