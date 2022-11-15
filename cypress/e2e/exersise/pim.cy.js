import PIM from "../page/ClintPO/PIM.po";
import loginPage from "../page/ClintPO/loginpage.po";
import addEmployee from "../page/AddEmployee.po";
const pim = new PIM();
const Login = new loginPage();
const employee = new addEmployee();
describe('PIM menu', function () {
    it('working with PIM menu ', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Enter User Name
        cy.get(Login.userNameInput()).type('Admin');
        
        //Enter Password
        cy.get(Login.password()).type('admin123');

        // Click on Login Button
        cy.get(Login.loginBtn()).click();

        //Click On PIM menu Item
        cy.get(pim.pimMenu()).click()

        //click on add Employee 
        cy.contains(employee.seletAddEmployee()).click();

        // Enter the  Name in First Name Field
        cy.get(employee.emp_FirstName()).type('shiva');

        // Enter the Last Name in Last Name Field
        cy.get(employee.emp_LasttName()).type('Reddy');

        //upload file with attachFile Method
         cy.get(employee.uploadIMg).attachFile('download.png');
        
       
        //click on submit
        cy.get(employee.submitBtn()).click();



    });
});
