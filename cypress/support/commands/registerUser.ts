declare global {
  namespace Cypress {
    interface Chainable {
      registerUser: typeof registerUser;
    }
  }
}

export const registerUser = (input: string) => {
}