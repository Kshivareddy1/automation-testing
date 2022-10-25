// import cypress = require("cypress")

describe('working with google', function () {
    it('google', function (){

        cy.visit('www.google.com');
        cy.xpath('//*[text()="Images"]').click();
    })
})