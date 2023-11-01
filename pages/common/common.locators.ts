/**
 * Page Object Model for Main Page locators
 */
import {HeaderPage} from "../header/header.page";

export class CommonLocators {
    get requestDemoButton() {
        return cy.get('a.btn.btn-secondary.btn-solid[href=\'https://www.paylocity.com/request-a-demo/\']');
    }
}

export default new CommonLocators();