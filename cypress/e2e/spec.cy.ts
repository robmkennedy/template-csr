describe('Navigation', () => {
    it('navigates to items', () => {
        cy.visit('http://localhost:5173/');

        cy.contains('Items').click();

        cy.url().should('include', '/items');
    });

    it('searches', () => {
        // Delay the return to ensure the spinner will be shown
        cy.intercept('GET', 'https://www.omdbapi.com/*', {
            fixture: 'searchResult.json',
            delayMs: 1000
        });

        cy.visit('http://localhost:5173/');

        cy.findByRole('textbox', { name: 'Search name' }).type('jaws');
        cy.findByRole('button', { name: 'Search' }).click();
    });
});
