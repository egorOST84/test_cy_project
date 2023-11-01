import RequestDemoLocators from '../../pages/demo/request-demo.locators';
export class RequestDemoPage {

    /**
     * Submitting form with invalid data
     * @param locatorName
     * @param errorMessage
     * @param isEmpty
     * @param value
     * @param elementIndex
     */
    public static submitFormWithInvalidData(locatorName: string, errorMessage: string, isEmpty: boolean, value: string, elementIndex: number) {
        const locators = RequestDemoLocators;
        const selectedLocator = locators[locatorName];

        cy.log(selectedLocator);

        if(isEmpty) {
            selectedLocator.clear();
        } else {
            selectedLocator.type(value);
        }

        locators.submitForm().click({ force: true });

        // Проверяем нужный элемент по индексу
        locators.invalidInput.eq(elementIndex)
            .should('be.visible')
            .should('have.text', errorMessage)
            .should('have.css', 'color', 'rgb(237, 32, 36)');
    }
}

export default new RequestDemoPage();