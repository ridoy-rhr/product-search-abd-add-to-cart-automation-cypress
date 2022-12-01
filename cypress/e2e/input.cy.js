require('cypress-xpath');

describe('My First Test', () => {

  it('Visit', () => {
      //visit website
    cy.visit('https://demo.nopcommerce.com/')
  })

  it('Search', () => {
      
    cy.xpath("//input[@id='small-searchterms']").type('HTC One M8 Android L 5.0 Lollipop')
    cy.xpath("//button[contains(text(),'Search')]").click()
    cy.xpath("//a[normalize-space()='HTC One M8 Android L 5.0 Lollipop']").click()
    cy.wait(5000)

  })
})
 