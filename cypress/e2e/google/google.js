import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})
Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
  })
Then('click gmail button', () => {
    cy.get(':nth-child(1) > .gb_d').click();
})
And('i click on get gmail btn',  () => {
    cy.get('.feature__buttons > :nth-child(1) > .button').click();
})