import loginPage from '../page/ClintPO/loginpage.po';
import Admin from '../page/ClintPO/Admin.po';
const Login = new loginPage();
const admin = new Admin();

describe('validate login functionality', () => {
  it('login Functionality', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Enter User Name
    cy.get(Login.userNameInput()).type('Admin');

    //Enter Password
    cy.get(Login.password()).type('admin123');

    // Click on Login Button
    cy.get(Login.loginBtn()).click();
    cy.wait(5000)

    //Click On PIM menu Item
    cy.contains(admin.adminMenu()).click();
    

    //click on User Management 
    cy.get(admin.userManagement()).click();
    cy.wait(5000)

    //click on user in the Drop down  
    cy.get(admin.selectUser()).click({ force: true });

    //click on Add Button
    cy.xpath('//*[text()=" Add "]').click();

    // cy.get(admin.userRoleDropDown()).first().click();

    // cy.xpath(admin.selectAdmin()).click();

    // cy.xpath(admin.statusDropDown()).click();

    //click on  Employee Name
    cy.get(admin.EmployeeName()).type('shivareddy');;



  })
})