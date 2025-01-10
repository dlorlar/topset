describe("Assertions Demo", () => {
    it ("Implicit Assertion", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/auth/login")
        cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/auth/login')
        cy.title().should('not.eq', 'OrangeHRMI')

        cy.get('.orangehrm-login-branding > img').should('be.visible') // Logo visible
            .and('exist')

        cy.xpath("//a").should('have.length', '5') //No of links

        //Enter a valid username
        cy.get("input[placeholder='username']").type('Admin')
        cy.get("input[placeholder='username']").should('have.value', 'Admin')

        //Enter a valid password
        cy.get("input[placeholder='password']").type('admin123')

        //Click the login button
        cy.get('.oxd-button').click()
    })

    it('Explicit Assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/auth/login")

        cy.get("input[placeholder='username']").type('Admin')
        cy.get("input[placeholder='password']").type('admin123')
        cy.get('.oxd-button').click()

        let expName="Demo sample";

        cy.get('.oxd-userdropdown-name').then( (x)=> {

            let actName=x.text()

            //BDD
            //expect(actName).to.equal(expName)
            //expect(actName).to.notequal(expName)


            //TDD
            //assert.equal(actName,expName)
            //assert.not.equal(actName,expName)
        })
    })
})