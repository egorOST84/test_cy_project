/**
 * Page Object Model for Header Page locators
 */

export class HeaderPage {
    get requestDemoButton() {
        return cy.get('a.btn.btn-gradient.mt-n1[href=\'https://www.paylocity.com/request-a-demo/?sitead=rad-header\']');
    }
}

export default new HeaderPage();