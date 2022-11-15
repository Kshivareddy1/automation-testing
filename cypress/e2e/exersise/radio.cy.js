// const { first } = require("cypress/types/lodash");



describe('radio button',function ()  {
    it('working with radio button', function ()  {
      cy.visit('https://demoqa.com/radio-button');

    // cy.get('input[type="radio"]').first().check()
    cy.get('[type="radio"]').first().check();

    // it('working with taxpay', function () {
    //   cy.visit('https://parivahan.gov.in/parivahan//en/content/mparivahan');

    // })
      
    });
  });
