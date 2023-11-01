/**
 * Page Object Model for Confirmation locators
  */
class ConfirmationLocators {
    // Getters for various elements on the confirmation page
    get sweetYouAreAllSetHeading() {
        return cy.get('h1.mb-md-3');
    }

    get teamWillReachOutMessage() {
        return cy.get('div.h4.text-body');
    }

    get thankYouIcon() {
        return cy.get('[src=\'/media/rqcda0iu/thankyou-icon.png\']');
    }

    get supportWasAmazingQuote() {
        return cy.get('p.h2.mb-5.quote-text');
    }
}

export default new ConfirmationLocators();