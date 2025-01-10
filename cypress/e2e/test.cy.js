
describe('Login Functionality', () =>{

    it('Site url',() => {

        //Visit the login page before each test
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
    })

    it('should successfully login with valid credentials', () => {
        //Enter a valid username
        cy.get("[placeholder='Username']").type('Admin')
    
        //Enter a valid password
        cy.get("[placeholder='Password']").type('admin123')
    
        //Click the login button
        cy.get('.oxd-button').click()
    })

    it('Select a side menu', () => {
        //cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()
        cy.xpath("//span[normalize-space()='Leave']").click()

    })
    
})

