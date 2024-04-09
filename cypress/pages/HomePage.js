Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
/// <reference types="cypress" />
import HomeLocators from './locators/HomeLocators.json'
import LoginLocators from './locators/LoginLocators.json'

class HomePage{
    verificarHome = () => {
        cy.get(HomeLocators.tituloHome).should('be.visible');
        cy.get(HomeLocators.tituloHome).should('contain.text', 'Hello');
    }

    logOut = () => {
        cy.get(HomeLocators.logOutBtn).click();
    }
    
    visualizeRegisterModal = () => {
        cy.get(LoginLocators.botonRegistro).should('be.visible');
    }

}

export default new HomePage();