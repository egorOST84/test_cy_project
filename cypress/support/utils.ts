// Generating a random email
export function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(7);
    return `testEmail-${randomString}@test.com`;
}

// Generating a random phone number
export function generateRandomPhoneNumber(): string {
    const randomAreaCode = Cypress._.random(100, 999);
    const randomExchangeCode = Cypress._.random(100, 999);
    const randomLineNumber = Cypress._.random(1000, 9999);

    const patterns = [
        `(${randomAreaCode})${randomExchangeCode}-${randomLineNumber}`,
        `${randomAreaCode}-${randomExchangeCode}-${randomLineNumber}`
    ];

    return Cypress._.sample(patterns) as string;
}

// Generating a random First name
export function generateRandomFirstName() {
    const randomNames = ['John', 'Jane', 'Mike', 'Emily', 'David', 'Sarah'];
    return Cypress._.sample(randomNames);
}

// Generating a random Last name
export function generateRandomLastName() {
    const randomLastNames = ['Smith', 'Johnson', 'Brown', 'Lee', 'Williams', 'Davis'];
    return Cypress._.sample(randomLastNames);
}

// Generating a random Company name
export function generateRandomCompanyName() {
    const randomCompanyNames = ['ABC Inc.', 'XYZ Corporation', 'Tech Solutions', 'Global Services'];
    return Cypress._.sample(randomCompanyNames);
}

// Generating a random U.S. zip code
export function generateRandomZipCode() {
    const randomZipCode = Cypress._.random(10000, 99999);
    return randomZipCode.toString();
}

// Generating a random employee count
export function generateRandomEmployeeCount() {
    const randomIndex = Cypress._.random(1, 5);
    return randomIndex;
}

// Generating a random job title
export function generateRandomJobTitle() {
    const randomJobTitles = ['Manager', 'Engineer', 'Analyst', 'Director', 'Designer', 'Developer'];
    return Cypress._.sample(randomJobTitles);
}

// Handling JavaScript errors
export function handleJavaScriptErrors() {
    cy.on('uncaught:exception', (err, runnable) => {
        // Check that the error is due to the lack of $ (jQuery)
        if (err.message.includes("$ is not defined")) {
            // There was an error, but we intercepted it and handled it
            cy.log('Error: $ is not defined');
            return false
        }
        // Check that the error is due to cannot read property 'TenantFeatures' of undefined
        if (err.message.includes("Cannot read properties of undefined (reading 'TenantFeatures')")) {
            // There was an error, but we intercepted it and handled it
            cy.log('Error: Cannot read properties of undefined (reading \'TenantFeatures\')');
            return false
        }
        // If the error is not due to lack of jQuery or cannot read property 'TenantFeatures' of undefined, return true
        return true
    })
}