describe('e2e User registration', () => {
  it('@e2e Registration', () => {
      cy.visit('/');

      cy.get('a.nav-link[href=\'https://access.paylocity.com/\']')
          . invoke('removeAttr','target')
          . click();

      cy.get('a[href="/Login/Register"]')
          .should('contain', 'Register New User')
          .click();

      cy.contains('I don\'t have a Registration Passcode')
          .click();

      cy.get('#CompanyId').type('MyCompany')
      cy.get('[name=\'Ssn\']').type('12345')
    });
  })
