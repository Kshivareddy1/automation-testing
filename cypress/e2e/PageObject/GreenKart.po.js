class greenkart{

    getVegetableName(){

      return  cy.get('div h4')
    }
    addToCart(value){
        return cy.xpath(' //div/h4[text()="'+value+'"]/../div/button')
    }
    vegetablePrice(){
        return cy.xpath('(//ul[@class="cart-items"])[1]/li/div[2]/p[2]')
    }
    clickCart(){

        return cy.get('.cart-icon > img')
    }

    // getVegetablePrice(value){

    //     return cy.xpath('//div/h4[text()="'+value+'"]/../../div/p')
    // } 
    cartPrise(){

        return cy.xpath('//tr[2]/td[3]/strong')
    }
    // cartPrice(){
    //     return cy.get('h3 strong')
    // }
    
    
}
export default greenkart;