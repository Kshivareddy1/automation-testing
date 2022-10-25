class addEmployee {

    seletAddEmployee() {

        return 'Add Employee'
    }

    emp_FirstName(){
        return 'input[name="firstName"]'
    }
    emp_LasttName(){
        return 'input[name="lastName"]'
    }

    uploadIMg(){
        return 'img[class="employee-image"]'
    }

    submitBtn(){
        return 'button[type="submit"]'
    }


}
export default addEmployee;