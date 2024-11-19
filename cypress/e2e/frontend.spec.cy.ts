describe('Polestar Developer Portal Test', () => {
  it('Should load the homepage successfully', () => {
    cy.visit('/');
    cy.title().should('include', 'Polestar');
    cy.get('header').should('exist'); // Example: Validates the header.
  });
});
