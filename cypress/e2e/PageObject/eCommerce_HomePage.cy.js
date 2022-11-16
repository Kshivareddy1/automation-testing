class Homepage{
    visitHome(){
        return cy.visit('https://rahulshettyacademy.com/angularpractice/')
    }
    getName(){
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getEmail(){
        return cy.get('input[name="email"]')
    }
    getPassword(){
        return cy.get('#exampleInputPassword1')
    }
    checkbox(){
        return cy.get('#exampleCheck1')
    }
    genderMale(){
        return cy.get('#exampleFormControlSelect1')
    }
    radioStudent(){
        return cy.get('[value="option1"]')
    }
    radioEntrepreneur(){
        return cy.get('[value="option3"]')
    }
    getBirthday(){
        return cy.get('[name="bday"]')
    }
    twowayDataBinding(){
        return cy.get('.ng-untouched')
    }
    shopPage(){
       return cy.get('ul li:nth-child(2) a')
    }
}
export default Homepage