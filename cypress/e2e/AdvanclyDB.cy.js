describe('Advancly Digital Bank Test', ()=>{
    beforeEach(()=>{
        cy.visit('https://advancly-funder3.test.vggdev.com/login')
        cy.url().should('include', 'funder3.test.vggdev.com')
    })

    it.skip("Ensure user can login with correct credentials", ()=>{

        cy.get("input[placeholder='morty@ricknmorty.com']").type('kristen23@yopmail.com')
        cy.get("input[placeholder='********']").type('P@ssword01')
        cy.get("button[type='button']").click()
        cy.wait(5000)
        cy.get("div[class='page-title']").contains( 'Janessa')

        //zoho chat
        cy.get('#zsiq_agtpic').click() //zoho icon
        cy.wait(7000)

        //cy.getIframe('#siqiframe')
        //cy.xpath("//div[@class='chat_btn sqico-chat']").click()

        cy.getIframe('#siqiframe').find('div.chat_btn.sqico-chat').should('be.visible').click()
        cy.getIframe('#siqiframe').find('.msgarea.siq-message-textarea').type('hello admin, this is a test from cypress')
        cy.getIframe('#siqiframe').find('#sqico-send').click()
        cy.wait(5000)

        cy.getIframe('#siqiframe').find('.msgarea.siq-message-textarea').type('Bruce Willis')
        cy.getIframe('#siqiframe').find('#sqico-send').click()
        cy.wait(5000)

        cy.getIframe('#siqiframe').find('.msgarea.siq-message-textarea').type('bruce@gmail.com')
        cy.getIframe('#siqiframe').find('#sqico-send').click()
        cy.wait(5000)

        cy.getIframe('#siqiframe').find('.msgarea.siq-message-textarea').type('070382900234')
        cy.getIframe('#siqiframe').find('#sqico-send').click()
        cy.wait(5000)
        //start chat
    })

    it.skip("Ensure user cannot login with wrong credentials", ()=>{
        cy.visit('https://advancly-funder-sprint5.test.vggdev.com/login')
        cy.url().should('include', 'funder-sprint5.test.vggdev.com')

        cy.get("input[placeholder='morty@ricknmorty.com']").type('silver@yopmail.com')
        cy.get("input[placeholder='']").type('Password01')
        cy.get("button[type='button']").click()
        cy.wait(5000)
        cy.get("div[class='page-title']").contains( 'Janessa')
    })

    it.skip("Ensure Individual Onboarding is successful",()=>{
        cy.xpath("//a[normalize-space()='Sign Up']").click() //click sign up button
        cy.get('[data-testid="onboarding-type-section"] > :nth-child(2)').click()  //click on individual onboarding
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("select[name='country']").select('Nigeria').should('have.value', 'NG') //select user country of residence
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("input[placeholder='Enter your bvn']").type('22149008897').should('be.visible') //enter BVN for validation
        cy.get("button[type='button']").click() // click on proceed button to validate BVN
        cy.get("button[type='button']").click() // click on proceed button
    })

    it.skip("Ensure Corporate LLC Onboarding is successful",()=>{
        cy.xpath("//a[normalize-space()='Sign Up']").click() //click sign up button
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').click()  //click on corporate onboarding
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("select[name='business_type']").select('Limited Liability Company').should('have.value', 5) // select business type
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("input[placeholder='John']").type('Anjelina').should('be.be.visible')  // enter first name
        cy.get("input[placeholder='Doe']").type('Jolie').should('be.be.visible')   // enter last name
        cy.get("input[placeholder='07000000000']").type('09028933839').should('be.be.visible')   // enter phone number
        cy.get("input[placeholder='john.doe@example.com']").type('ajolie@yopmail.com').should('be.be.visible')   // enter email
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("input[name='businessRegistrationNumber']").type('00000000').should('be.be.visible')    // enter business registration number
        cy.wait(6000)
        cy.get("select[name='userPosition']").select('Business Owner/CEO').should('be.be.visible')   // select user position
        cy.get("input[placeholder='********']").type('P@ssword01').should('be.be.visible')    // enter password
        cy.get("button[type='button']").click()  // click on proceed button
        cy.get('.pincode-input-container > :nth-child(1)').type('1').should('be.be.visible') //email OTP
        cy.get('.pincode-input-container > :nth-child(2)').type('2').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(3)').type('3').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(4)').type('4').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(5)').type('5').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(6)').type('6').should('be.be.visible')
        cy.get("button[type='button']").click()  // click on proceed button
        cy.get('.pincode-input-container > :nth-child(1)').type('1').should('be.be.visible') //phone OTP
        cy.get('.pincode-input-container > :nth-child(2)').type('2').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(3)').type('3').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(4)').type('4')
        cy.get('.pincode-input-container > :nth-child(5)').type('5')
        cy.get('.pincode-input-container > :nth-child(6)').type('6')
        cy.get("button[type='button']").click()  // click on proceed button
    })

    it.skip("Ensure Corporate Partnership Onboarding is successful",()=>{
        cy.xpath("//a[normalize-space()='Sign Up']").click() //click sign up button
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').click()  //click on corporate onboarding
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("select[name='business_type']").select('Partnership').should('have.value', 4) // select business type
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("input[placeholder='John']").type('Anjelina').should('be.be.visible')  // enter first name
        cy.get("input[placeholder='Doe']").type('Jolie').should('be.be.visible')   // enter last name
        cy.get("input[placeholder='07000000000']").type('09028933839').should('be.be.visible')   // enter phone number
        cy.get("input[placeholder='john.doe@example.com']").type('ajolie@yopmail.com').should('be.be.visible')   // enter email
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("input[name='businessRegistrationNumber']").type('00000000').should('be.be.visible')    // enter business registration number
        cy.wait(6000)
        cy.get("select[name='userPosition']").select('Business Owner/CEO').should('be.be.visible')   // select user position
        cy.get("input[placeholder='********']").type('P@ssword01').should('be.be.visible')    // enter password
        cy.get("button[type='button']").click()  // click on proceed button
        cy.get('.pincode-input-container > :nth-child(1)').type('1').should('be.be.visible') //email OTP
        cy.get('.pincode-input-container > :nth-child(2)').type('2').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(3)').type('3').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(4)').type('4').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(5)').type('5').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(6)').type('6').should('be.be.visible')
        cy.get("button[type='button']").click()  // click on proceed button
        cy.get('.pincode-input-container > :nth-child(1)').type('1').should('be.be.visible') //phone OTP
        cy.get('.pincode-input-container > :nth-child(2)').type('2').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(3)').type('3').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(4)').type('4')
        cy.get('.pincode-input-container > :nth-child(5)').type('5')
        cy.get('.pincode-input-container > :nth-child(6)').type('6')

    })

    it.skip("Ensure Corporate NGO Onboarding is successful",()=>{
        cy.xpath("//a[normalize-space()='Sign Up']").click() //click sign up button
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').click()  //click on corporate onboarding
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("select[name='business_type']").select('NGO').should('have.value', 3) // select business type
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("input[placeholder='John']").type('Anjelina').should('be.be.visible')  // enter first name
        cy.get("input[placeholder='Doe']").type('Jolie').should('be.be.visible')   // enter last name
        cy.get("input[placeholder='07000000000']").type('09028933839').should('be.be.visible')   // enter phone number
        cy.get("input[placeholder='john.doe@example.com']").type('ajolie@yopmail.com').should('be.be.visible')   // enter email
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("input[name='businessRegistrationNumber']").type('00000000').should('be.be.visible')    // enter business registration number
        cy.wait(6000)
        cy.get("select[name='userPosition']").select('Business Owner/CEO').should('be.be.visible')   // select user position
        cy.get("input[placeholder='********']").type('P@ssword01').should('be.be.visible')    // enter password
        cy.get("button[type='button']").click()  // click on proceed button
        cy.get('.pincode-input-container > :nth-child(1)').type('1').should('be.be.visible') //email OTP
        cy.get('.pincode-input-container > :nth-child(2)').type('2').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(3)').type('3').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(4)').type('4').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(5)').type('5').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(6)').type('6').should('be.be.visible')
        cy.get("button[type='button']").click()  // click on proceed button
        cy.get('.pincode-input-container > :nth-child(1)').type('1').should('be.be.visible') //phone OTP
        cy.get('.pincode-input-container > :nth-child(2)').type('2').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(3)').type('3').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(4)').type('4')
        cy.get('.pincode-input-container > :nth-child(5)').type('5')
        cy.get('.pincode-input-container > :nth-child(6)').type('6')
      
    })

    it("Ensure Corporate Registered Business Onboarding is successful",()=>{
        cy.xpath("//a[normalize-space()='Sign Up']").click() //click sign up button
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').click()  //click on corporate onboarding
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("select[name='business_type']").select('Registered Business').should('have.value', 2) // select business type
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("input[placeholder='John']").type('Anjelina').should('be.be.visible')  // enter first name
        cy.get("input[placeholder='Doe']").type('Jolie').should('be.be.visible')   // enter last name
        cy.get("input[placeholder='07000000000']").type('09028933839').should('be.be.visible')   // enter phone number
        cy.get("input[placeholder='john.doe@example.com']").type('ajolie@yopmail.com').should('be.be.visible')   // enter email
        cy.get("button[class='button_Button__Ag+fw undefined']").click() // click on proceed button
        cy.get("input[name='businessRegistrationNumber']").type('00000000').should('be.be.visible')    // enter business registration number
        cy.wait(6000)
        cy.get("select[name='userPosition']").select('Business Owner/CEO').should('be.be.visible')   // select user position
        cy.get("input[placeholder='********']").type('P@ssword01').should('be.be.visible')    // enter password
        cy.get("button[type='button']").click()  // click on proceed button
        cy.get('.pincode-input-container > :nth-child(1)').type('1').should('be.be.visible') //email OTP
        cy.get('.pincode-input-container > :nth-child(2)').type('2').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(3)').type('3').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(4)').type('4').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(5)').type('5').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(6)').type('6').should('be.be.visible')
        cy.get("button[type='button']").click()  // click on proceed button
        cy.get('.pincode-input-container > :nth-child(1)').type('1').should('be.be.visible') //phone OTP
        cy.get('.pincode-input-container > :nth-child(2)').type('2').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(3)').type('3').should('be.be.visible')
        cy.get('.pincode-input-container > :nth-child(4)').type('4')
        cy.get('.pincode-input-container > :nth-child(5)').type('5')
        cy.get('.pincode-input-container > :nth-child(6)').type('6')
      
    })
})