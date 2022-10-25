
// describe('open mparivahan website', () => {

    it('for taxpaying ', () => {

cy.visit('https://parivahan.gov.in/parivahan//en/content/mparivahan');
cy.contains('Online Services').click();



    })

// })
describe('open mparivahan website',function ()  {
    it('working for taxpaying', function ()  {
      cy.visit('https://parivahan.gov.in/parivahan//en/content/mparivahan');

    // cy.get('input[type="radio"]').first().check()
    cy.get('[data-id="432"] > .dropdown-toggle').click()
    cy.wait(3000)
    cy.get('[data-id="984"]>a').click();
    cy.get('[name="aa"]').select('Karnataka');
    cy.wait(5000)
    cy.get('#regnlinkid > [style="width: 70%;"] > .inline-sectio').click();
      
    });
  });
