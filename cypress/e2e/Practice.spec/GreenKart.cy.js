import greenkart from '../PageObject/GreenKart.po'
import data from '../../fixtures/eCommerce.json'

const GreenKart = new greenkart();
describe('greenkart vegetable shop', function () {



    it('greenkart - eCommerce', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        GreenKart.getVegetableName().each((siva) => {
            const vegetableName = siva.text()
            if (data.vegetable.includes(vegetableName)) {
                cy.log('This is "' + vegetableName + '"')
                GreenKart.addToCart(vegetableName).click()
            }
        })
        GreenKart.clickCart().click();
        var sum = 0
        GreenKart.vegetablePrice().each((price) => {
            const totalPrice = price.text()
            var res = totalPrice.split(' ')
            res = Number(res)
            // cy.log(res)
            sum = sum + res
            cy.log(sum)
            cy.log(typeof(sum))
        })
        GreenKart.cartPrise().then((element) => {
            const value = element.text()
            cy.log(value)
             var totalValue = value
             totalValue = Number(totalValue)
             cy.log(typeof(totalValue) )
            // expect(sum).to.equal(totalValue)
        })
    })


})



