class Admin {

    adminMenu() {
        return 'Admin'

    }
    userManagement() {
        return '[class="oxd-topbar-body-nav-tab --parent --visited"]'   
    }
    selectUser() {
        return 'a[role="menuitem"]'
    }
    clickAddBtn() {
        return '//*[text()=" Add "]'
    }
    userRoleDropDown() {
        return '[class="oxd-select-text-input"]'
    }
    selectAdmin() {
        return '//*[text()="Admin"][last()]'
    }
    statusDropDown() {
        return '//*[text()="-- select --"][last()]'

    }
    EmployeeName(){

        return 'input[placeholder="Type for hints..."]'
    }
}
export default Admin;