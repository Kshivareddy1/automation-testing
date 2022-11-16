class ProductPage{
    getProduct(){
        return cy.get('h4 a')
    }
    clickAdd(value){
        return cy.xpath('//h4/a[text()="'+value+'"]/../../../div/button')
    }
    checkOut(){
        return cy.contains('Checkout')
    }
}
export default ProductPage
