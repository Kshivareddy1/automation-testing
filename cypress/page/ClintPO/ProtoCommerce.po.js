class ProtoCommerce {


    NameInput() {

        return cy.get(':nth-child(1) > .form-control')
    }

    emailInput() {

        return cy.get(':nth-child(2) > .form-control')
    }

    password() {

        return cy.get('#exampleInputPassword1')
    }

    checkBox() {

        return cy.get('#exampleCheck1')
    }
    dropDown() {

        return cy.get('#exampleFormControlSelect1')
    }
    radioBtn() {

        return cy.get('#inlineRadio2')
    }
    dropDown() {

        return cy.get('#exampleFormControlSelect1')
    }
    dateOfBirth() {

        return cy.get(':nth-child(8) > .form-control')
    }
    submitBtn() {

        return cy.get('input[class="btn btn-success"]')
    }
    successMsg() {

        return cy.get('div[class="alert alert-success alert-dismissible"]')
    }

}

export default ProtoCommerce;