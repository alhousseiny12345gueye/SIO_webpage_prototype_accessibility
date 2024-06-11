describe('Home', () => {
  it('should be accessible', () => {
    cy.visit('index.html')
    cy.injectAxe()
    cy.checkA11y()
  })
})


  it('should be accessible', () => {
    cy.visit('event_calendar_page.html')
    cy.injectAxe()
    cy.checkA11y()
  })
