/// <reference types="Cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

import LoginPage from "../pages/login_page";

const loginPage = new LoginPage();

Given(/^eu acesse a página home da aplicação$/, () => {
  loginPage.accessHomePage();
});

When(/^eu inserir meu email "([^"]*)" e senha "([^"]*)"$/, (email, password) => {
  console.log(email, password);
  loginPage.accessLoginPage();

  loginPage.fillLoginInfo(email, password);
});

When(/^clicar no botão entrar$/, () => {
  loginPage.submitLogin()
});

Then(/^tenho meu acesso "([^"]*)"$/, (message) => {
  console.log(message);
  // cy.contains('Dashboard')
});
