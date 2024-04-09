import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from '@pages/LoginPage'
import HomePage from '@pages/HomePage'



Given('Me logueo como usuario correctamente', () => {
    cy.fixture('examples/LoginExample.json').then((json) => {
        LoginPage.visitarPagina();
        LoginPage.doLogin(json);

    })
})

Given('Me logeo en la pagina con usuario personal', () => {
    cy.fixture('examples/LoginExample.json').then((json) => {
        LoginPage.loginPersonalUserOnPage(json);

    })
})
Given('Me logeo en la pagina con usuario personal con contraseña erronea', () => {
    cy.fixture('examples/LoginExample.json').then((json) => {
        LoginPage.loginFailPersonalUserOnPage(json);

    })
})
Given('Me registro en la pagina con usuario existente', () => {
    cy.fixture('examples/LoginExample.json').then((json) => {
        LoginPage.registerWithUserAlreadyRegistered(json);

    })
})

Given('Me logueo como admin correctamente', () => {
    cy.fixture('examples/LoginAdminExample.json').then((json) => {
        cy.visit("/my-account/");
        //LoginPage.visitarPagina();
        LoginPage.doLoginAdmin(json);

    })
})

Given('Navego al sitio automationtesting', () => {
    cy.visit("/my-account/");
})

When('Me logueo como usuario con user {string} y pass {string}', (user,pass) => {
    LoginPage.doLoginScenarioOutline(user,pass);
})

Then('Valido saludo de bienvenida en el Título', () => {
    HomePage.verificarHome();     
})

Then('Me deslogeo de la pagina', () => {
    HomePage.logOut();     
})

Then('Visualizo modal de registro', () => {
    HomePage.visualizeRegisterModal();     
})

Then('Valido falla al iniciar sesion', () => {
    LoginPage.validateFailInLogin();     
})

Then('El usuario ya existe', () => {
    LoginPage.verifyUserAlredyRegister();     
})


