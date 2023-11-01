export class CommonPage {
    /**
     * Go to the main page
     */
    public static goToMainPage() {
        cy.visit('/');
        cy.get('.banner-inner > img[alt=\'Paylocity Home Banner Pros Mb\']').should('exist');
    }
}

export default new CommonPage();
