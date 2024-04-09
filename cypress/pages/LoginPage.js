Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
/// <reference types="cypress" />
import LoginLocators from './locators/LoginLocators.json'

class LoginPage{
    inputSuborder = () => cy.get("#subOrderId");

    visitarPagina = () => { 
        cy.visit('/my-account/');
        cy.wait(3000);
        //this.inputSuborder().should("be.visible")
    };

    doLoginAdmin = (json) => { //realiza el login en la aplicacion de acuerdo a los datos cargados en el archivo "LoginAdminExample.json"
        cy.get(LoginLocators.inpUsernameLogin).type(json.username);
        cy.get(LoginLocators.inpPassLogin).type(json.pass);
        cy.get(LoginLocators.btnIniciarSesionLogin).click();
    };

    doLogin = (json) => { //realiza el login en la aplicacion de acuerdo a los datos cargados en el archivo "LoginExample.json"
        cy.get(LoginLocators.inpUsernameLogin).type(json.username);
        cy.get(LoginLocators.inpPassLogin).type(json.pass);
        cy.get(LoginLocators.btnIniciarSesionLogin).click();
    };

    doLoginScenarioOutline = (user,pass) => { //realiza el login en la aplicacion de acuerdo a los datos cargados en el escenario Outline, parametrizando así variables
        cy.get(LoginLocators.inpUsernameLogin).type(user);
        cy.get(LoginLocators.inpPassLogin).type(pass);
        cy.get(LoginLocators.btnIniciarSesionLogin).click();
    };

    loginPersonalUserOnPage = (json) => { //realiza el login en la aplicacion de acuerdo a los datos cargados en el escenario Outline, parametrizando así variables
        cy.get(LoginLocators.inpUsernameLogin).type(json.personalUsername);
        cy.get(LoginLocators.inpPassLogin).type(json.personalPass);
        cy.get(LoginLocators.btnIniciarSesionLogin).click();
    };
    registerWithUserAlreadyRegistered = (json) => { //realiza el login en la aplicacion de acuerdo a los datos cargados en el escenario Outline, parametrizando así variables
        cy.get(LoginLocators.inputRegisterUser).type(json.personalUsername);
        cy.wait(3000);
        cy.get(LoginLocators.inputRegisterPass).type(json.personalPass);
        cy.get(LoginLocators.botonRegistro).click();

    };
    loginFailPersonalUserOnPage = (json) => {
        cy.get(LoginLocators.inpUsernameLogin).type(json.personalUsername);
        cy.get(LoginLocators.inpPassLogin).type(json.personalPass);
        cy.get(LoginLocators.btnIniciarSesionLogin).click();
    };
    validateFailInLogin = () => {
        cy.get(LoginLocators.cartelErrorLogin).should('contain.text', 'is incorrect');
    };
    verifyUserAlredyRegister = () => {
        cy.get(LoginLocators.cartelErrorLogin).should('contain.text', 'An account is already registered');
    };
}

export default new LoginPage(); 
