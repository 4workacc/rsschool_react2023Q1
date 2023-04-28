describe('template BigCard', () => {
    it('BigCard dont show by default', () => {
      cy.visit('http://localhost:3000');
      cy.get('div[class="BigCard"]').should('not.exist');    
    }),
    it('BigCard showed after any card click', ()=>{
        cy.visit('http://localhost:3000');        
        cy.get('div[class="Card"]').first().click();
        cy.get('div[class="BigCard"]');
    })
  })