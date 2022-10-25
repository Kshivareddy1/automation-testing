
describe('redif.com ', () => {

    it('working with redif.com', () => {
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details');
        cy.wait(5000)
        
        // Create a Rediffmail account
        //enter full name 
        cy.xpath('(//input[@type="text"])[1]').type('shivareddy');

        //Choose a Rediffmail ID
        cy.xpath('(//input[@type="text"])[02]').type('vfbfb');
        cy.wait(5000)

        // click the button "check availabulity"
        cy.xpath('(//input[@type="button"])[1]').click();

        // create password
        cy.get('#newpasswd').type('shiva123');
        // create Retry password
        cy.xpath('(//input[@type="password"])[2]').type('shiva123');

        // click he check box if not required alternative address
        cy.get('input[type="checkbox"]').check();

        // enter mobile number (country code)
        //cy.get('input[value="91"]').click({ force: true });

        //cy.get('[onclick="javascript: selectValue('+'+'91','91');"]').click();
        cy.get('[name="DOB_Dayc82155e9"]').select('06');
    })
})