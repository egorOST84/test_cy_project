/**
 * Page Object Model for Request Demo locators
  */
class RequestDemoLocators {
    // Getters for various elements
    get readyToRequestDemoHeading() {
        return cy.contains('h2', 'Ready to Request a Demo?');
    }

    get acceptCookiesButton() {
        return cy.contains('button', 'Accept All Cookies');
    }

    get businessEmailInput() {
        return cy.get('[placeholder=\'Business Email *\']');
    }

    get phoneNumberInput() {
        return cy.get('[placeholder=\'Phone *\']');
    }

    get firstNameInput() {
        return cy.get('[placeholder=\'First Name *\']');
    }

    get lastNameInput() {
        return cy.get('[placeholder=\'Last Name *\']');
    }

    get companyInput() {
        return cy.get('[placeholder=\'Company *\']');
    }

    get zipCodeInput() {
        return cy.get('[placeholder=\'Business Zip Code *\']');
    }

    get employeeCountSelect() {
        return cy.get('select.form-control');
    }

    get jobTitleInput() {
        return cy.get('[placeholder=\'Job Title\']');
    }
    submitForm() {
        return cy.get('[value=\'Submit\']');
    }

    get invalidInput() {
        return cy.get('.field-validation-error > span');
    }

}

export default new RequestDemoLocators();