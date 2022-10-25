

describe('first exersises', () => {

    it('eersise_1', () => {
        cy.visit('https://formstone.it/components/dropdown/demo/');
        cy.wait(5000)
        cy.get('.back_link > a').click();
        cy.xpath('(//a[@class="js-bound"])[1]').click();
        cy.get('[id="demo_label-dropdown-selected"]').click();
        cy.get('[data-value="AL"]').click();
        cy.get('a[class="button"]').invoke('removeAtrr','target').click();

    })
})