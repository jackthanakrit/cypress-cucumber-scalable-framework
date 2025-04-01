import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../../pages/loginPage';

Given('I open the Sauce Demo login page', () => {
  LoginPage.visit();
});

When('I login with username {string} and password {string}', (username, password) => {
  LoginPage.enterUsername(username);
  LoginPage.enterPassword(password);
  LoginPage.submit();
});

Then('I should see the {string}', (expectedResult) => {
  if (expectedResult === 'Products') {
    LoginPage.getPageTitle().should('have.text', expectedResult);
  } else {
    LoginPage.getErrorMessage().should('contain.text', expectedResult);
  }
});
