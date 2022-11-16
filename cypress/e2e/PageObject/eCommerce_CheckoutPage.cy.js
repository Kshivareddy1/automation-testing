class CheckOut{
    productPrice(){
        return cy.get('td:nth-child(4) strong')
    }
    cartPrice(){
        return cy.get('h3 strong')
    }
    checkOutSubmit(){
        return cy.get('button.btn.btn-success')
    }
    getCountry(){
        return cy.get('#country')
    }
    selectCountry(){
        return cy.get('.suggestions > ul > li > a')
    }
    agreeCheckbox(){
        return cy.get('#checkbox2')
    }
    purchaseButton(){
        return cy.get('.btn.btn-success')
    }
    successMessage(){
        return cy.get('div.alert')
    }
}
export default CheckOut