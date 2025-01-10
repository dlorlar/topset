describe('Alerts', () => {

    //Javascript alert
    it('Js alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert', (t)=>{
            expect(t).to.contain('I am a JS Alert');
        })

        //alert windows automatically closed by cypress
        cy.get("#result").should('have.text', 'You successfully clicked an alert')
    })

    //Javascript confirm alert
    it('Js confirm alert using Ok button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t)=>{
            expect(t).to.contain('I am a JS Confirm');
        })

        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('Js confirm alert using Cancel button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t)=>{
            expect(t).to.contain('I am a JS Confirm');
        })

        cy.on('window:confirm',()=> false);

        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    it('Js prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click();

        //cy.on('window:prompt',()=> false);

        cy.get('#result').should('have.text', 'You entered: welcome')
    })

    it.skip('Authenticated Alerts', () => {

        //approach 1
        /*cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: {
                                                                    username: 'admin',
                                                                    password: 'admin'
        }})
        
        cy.get("div[class='example']").should('have.contain', 'Congratulations')*/
        
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example']").should('have.contain', 'Congratulations')
    })
})