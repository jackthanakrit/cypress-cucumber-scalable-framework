class LoginPage {
    visit() {
      cy.visit('/');
    }
  
    enterUsername(username) {
      cy.get('[data-test="username"]').clear().type(username);
    }
  
    enterPassword(password) {
      cy.get('[data-test="password"]').clear().type(password);
    }
  
    submit() {
      cy.get('[data-test="login-button"]').click();
    }
  
    getErrorMessage() {
      return cy.get('[data-test="error"]');
    }
  
    getPageTitle() {
      return cy.get('.title');
    }
  }
  
  export default new LoginPage();
  