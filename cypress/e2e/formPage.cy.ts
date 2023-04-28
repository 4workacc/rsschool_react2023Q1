describe('template Form page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/form')
  }),
  it('Adding card', () => {
    cy.visit('http://localhost:3000/form');
    cy.get('input[id="Form_textInput"').type('QQQ');
    cy.get('input[id="Form_numberInput"]').type('50');
    cy.get('input[id="Form_dateInput"').type('2020-10-10');
    cy.get('input[type=checkbox]').check();
    cy.get('input[id="radio0"').check();
    cy.get('select').select('green');
    cy.get('input[type=file]').selectFile('cypress/assert/1.png');  
    cy.get('input[type=submit]').click();
    cy.get('div[class="FormCard"');
  });
})