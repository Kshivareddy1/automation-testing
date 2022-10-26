// const cypress = require("cypress")
// const { it } = require("mocha")

describe('validate checkbox', function (){

    it('check boxes select', function (){
cy.visit('https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html')

// cy.get('[id="tecnologia1"]').check();
cy.get('#nome').type('shiva');
cy.get('#sobrenome').type('reddy');
cy.get('#email').type('sshivareddy767@gmail.com');

cy.get('[type="checkbox"]').check().as('shiva');
cy.wait(2000)
cy.get('@shiva').uncheck();
cy.xpath('(//input[@type="radio"])[2]').check();
cy.get('[id="experiencia"]').type('this is the first class');


    })
})