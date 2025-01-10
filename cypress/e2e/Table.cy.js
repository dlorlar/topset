describe('Handle Tables', ()=>{
    beforeEach('table', ()=>{
        cy.visit('https://demo.opencart.com/admin/')
        //cy.get('#input-username').type('demo');
        //cy.get('input-password').type('demo');
        cy.get("button[type='submit']").click()
        //cy.get("btn-close").click()

        //Customers>>Customer
        cy.get("#menu-customer>a").click()
        cy.get("#menu-customer>ul>li:first-child").click()
    })

    it('Check number of Rows and Columns', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10)
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 6)
    })

    it('Check cell data for specific Row & Column', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(6)>td:nth-child(3)")
        .contains("habiba@gmail.com")
    })

    it('Read all the Row & Column data on first page', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each( ($row, index, $rows)=>{

                cy.wrap($row).within( ()=>{

                    cy.get("td").each(($col, index, $cols)=>{

                        cy.log($col.text())
                })
            })
        })
    })

    it.only('Pagination', ()=>{
        cy.get(".col-sm-6.text-end").then ( (e)=>{
            let mytext=e.text();
        })
    })




})