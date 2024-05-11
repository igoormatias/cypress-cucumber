/// <reference types="Cypress" />

import HomeElements from "../elements/home_elements";
import LoginElements from "../elements/login_elements";

const homeElements = new HomeElements();
const loginElements = new LoginElements();

const url = Cypress.config("baseUrl");
console.log('url', url);

class LoginPage {
  accessHomePage() {
    cy.visit(url);
    cy.wait(20000);
    alert('teste')
  }

  accessLoginPage() {
    cy.contains(homeElements.selectAccount()).click();
    cy.contains(homeElements.selectLogin()).click();
  }

  fillLoginInfo(email, password) {
    cy.get(loginElements.inputEmail()).type(email);
    cy.get(loginElements.inputPassword()).type(password);
  }

  submitLogin() {
    cy.get(loginElements.btnLogin()).click();
  }
}
export default LoginPage;
