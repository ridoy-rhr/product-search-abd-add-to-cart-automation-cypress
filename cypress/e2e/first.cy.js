require('cypress-xpath');
describe('My First Test', () => {
  it('Title Varify', () => {
      //visit website
    cy.visit('https://demo.nopcommerce.com/')
      //Title Varify
    cy.title().should('eq', 'nopCommerce demo store')
  })
  it('Login Verify', () => {
      
    cy.xpath("//a[contains(text(),'Log in')]").click()
    })
  
})

