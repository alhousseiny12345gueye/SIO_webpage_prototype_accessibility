describe('Accessibility Tests', () => {
    afterEach(function() {
      if (this.currentTest.state === 'failed') {
        Cypress.runner.stop()
      }
    })
  

  
    it('Event Calendar page should be accessible', () => {
      cy.visit('event_calendar_page.html')
      cy.injectAxe()
      cy.checkA11y()
    })
  })