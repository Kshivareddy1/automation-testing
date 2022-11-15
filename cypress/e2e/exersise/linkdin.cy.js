import linkdinLoginPage from "../page/ClintPO/linkdin.po";
const login = new linkdinLoginPage;

describe('working with linkdin login page', function () {
    it('working with login page ', function () {
        cy.visit('https://www.linkedin.com/login')

        //click  Join now button 
        cy.get(login.joinNow()).click();
        
        //Enter email or phone
        cy.get(login.emailInput()).type('admin123');

        // Enter password
        cy.get(login.password()).type('admin123');

        // //Click On PIM menu Item
        // cy.get(pim.pimMenu()).click()

        // //click on add Employee 
        // cy.contains(employee.seletAddEmployee()).click();

        // // Enter the  Name in First Name Field
        // cy.get(employee.emp_FirstName()).type('shiva');

        // // Enter the Last Name in Last Name Field
        // cy.get(employee.emp_LasttName()).type('Reddy');

        // //upload file with attachFile Method
        //  cy.get(employee.uploadIMg).attachFile('download.png');
        
       
        // //click on submit
        // cy.get(employee.submitBtn()).click();



    });
});
