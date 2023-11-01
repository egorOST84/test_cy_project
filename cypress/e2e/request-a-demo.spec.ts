// Importing utility functions and necessary locators
import {
    generateRandomCompanyName,
    generateRandomEmail, generateRandomEmployeeCount,
    generateRandomFirstName, generateRandomJobTitle,
    generateRandomLastName,
    generateRandomPhoneNumber, generateRandomZipCode
} from '../support/utils';
import { handleJavaScriptErrors } from '../support/utils';

// Importing locators for Request Demo and Confirmation pages
import RequestDemoLocators from '../../pages/demo/request-demo.locators';
import ConfirmationPage from "../../pages/confirmation/confirmation.locators";
import HeaderPage from "../../pages/header/header.page";
import CommonLocators from "../../pages/common/common.locators";

// Importing functions for Request Demo page
import { RequestDemoPage } from '../../pages/demo/request-demo.page';
import { CommonPage } from "../../pages/common/common.page";

// Importing content text for Confirmation page
import { confirmationContentText } from "../../pages/confirmation/confirmation.text";





describe('e2e Request a demo', () => {

    beforeEach(() => {
        // Visiting the base URL
        CommonPage.goToMainPage();

        // Clicking on the 'Request a Demo' button
        cy.log('Clicking on the Request a Demo button');
        //HeaderPage.requestDemoButton
         CommonLocators.requestDemoButton
            .should('be.visible')
            .click();
        handleJavaScriptErrors();
    });

    context('Positive scenario', () => {

        it('User can request a demo', () => {

            cy.log('Starting the User can request a demo test');

            // Verifying if the 'Ready to Request a Demo?' heading is visible
            RequestDemoLocators.readyToRequestDemoHeading.should('be.visible');

            // Clicking on the 'Accept All Cookies' button
            RequestDemoLocators.acceptCookiesButton.click();

            // Reading a random email from a file and entering it in the 'Business Email' input field
            cy.readFile('./cypress/fixtures/tempEmail.txt').then(email => {
                if (email) {
                    // If the file exists, enter its value in the field
                    cy.get('[placeholder=\'Business Email *\']').type(email);
                } else {

                    cy.log('Temporary email file does not exist.');
                }
            });

            // Generating and entering random data in various input fields
            RequestDemoLocators.phoneNumberInput.type(generateRandomPhoneNumber());
            RequestDemoLocators.firstNameInput.type(generateRandomFirstName());
            RequestDemoLocators.lastNameInput.type(generateRandomLastName());
            RequestDemoLocators.companyInput.type(generateRandomCompanyName());
            RequestDemoLocators.zipCodeInput.type(generateRandomZipCode());

            // Selecting a random option from the 'Employee Count' dropdown
            RequestDemoLocators.employeeCountSelect.then($select => {
                if ($select.length > 0) {
                    const randomIndex = generateRandomEmployeeCount();
                    const randomOption = $select.find(`option[value!=""]`).eq(randomIndex);
                    if (randomOption.length > 0) {
                        cy.wrap(randomOption).invoke('attr', 'selected', 'selected');
                    } else {
                        cy.log('No option found');
                    }
                } else {
                    cy.log('Select element not found');
                }
            });

            // Entering a random job title
            RequestDemoLocators.jobTitleInput.type(generateRandomJobTitle());

            // Submitting the form
            RequestDemoLocators.submitForm().click({force: true}).then(() => {
                cy.wait(2000); // Wait 2 seconds (change the value if necessary)

                // Checking the URL to verify if the confirmation page is reached
                cy.url().should('include', '/contact/ty/confirmation-demo/');

                // Verifying elements on the confirmation page
                ConfirmationPage.sweetYouAreAllSetHeading.contains(confirmationContentText.SWEET)
                    .should('be.visible')
                    .should('have.css', 'font-size', '60px')
                    .should('have.css', 'color', 'rgb(50, 62, 72)');

                ConfirmationPage.teamWillReachOutMessage.contains(confirmationContentText.TEAM_WILL_REACH_OUT_MESSAGE)
                    .should('be.visible')
                    .should('have.css', 'font-size', '22px')
                    .should('have.css', 'color', 'rgb(50, 62, 72)');

                ConfirmationPage.thankYouIcon
                    .should('be.visible');

                ConfirmationPage.supportWasAmazingQuote.contains(confirmationContentText.SUPPORT_WAS_AMAZING_QUOTE)
                    .should('be.visible')
                    .should('have.css', 'color', 'rgb(237, 32, 36)');

                cy.log('User can request a demo test completed');
            });
        });

        it.skip('User receives confirmation', () => {
            // TODO
        });

    });

    context('Negative scenarios', () => {

        const testData = [
            { locator: 'businessEmailInput', message: 'Please provide a value for Business Email', isEmpty: true, inputValue: '', elementIndex: 0 },
            { locator: 'businessEmailInput', message: 'Please enter a valid email address.', isEmpty: false, inputValue: 'invalidemail', elementIndex: 0},
            { locator: 'phoneNumberInput', message: 'Please provide a value for Phone', isEmpty: true, inputValue: '', elementIndex: 1 },
            { locator: 'phoneNumberInput', message: 'Please enter a valid phone number', isEmpty: false, inputValue: 'invalidphone', elementIndex: 1},
            //... put there data-set with all necessary test-cases
        ];

        testData.forEach(({ locator, message, isEmpty, inputValue, elementIndex }) => {

            it(`User cannot submit form with ${isEmpty ? 'empty' : 'invalid'} ${locator}`, () => {
                RequestDemoPage.submitFormWithInvalidData(locator, message, isEmpty, inputValue, elementIndex);
            });

        });

    });
})