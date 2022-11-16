//<reference types="Cypress"/>
import Homepage from '../PageObject/eCommerce_HomePage.cy'
import ProductPage from '../PageObject/eCommerce_ProductPage.cy'
//var data = require('../../fixtures/eCommerce.json')
import CheckOut from '../PageObject/eCommerce_CheckoutPage.cy'
import data from '../../fixtures/eCommerce.json'

describe('Practicing on eCommerce webpage', function () {
    const homePage = new Homepage()
    const productPage = new ProductPage()
    const checkOut = new CheckOut()

    before('Loading webpage', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
    })
    it.skip('Homepage - eCommerce', function () {
        homePage.getName().type(data.name)
        homePage.getEmail().type(data.email)
        homePage.getPassword().type(data.password)
        homePage.checkbox().check()
        homePage.genderMale().select(data.gender)
        homePage.radioStudent().click()
        homePage.radioEntrepreneur().should('be.disabled')
        homePage.twowayDataBinding().should('have.value', data.name)
    })
    it('Shop page - eCommerce', function () {
        homePage.shopPage().click()
        productPage.getProduct().each((siva) => {
            const mobileName = siva.text()
            if (data.product.includes(mobileName)) {
                cy.log('This is "' + mobileName + '"')
                productPage.clickAdd(mobileName).click()
            }
        })
        productPage.checkOut().click()
    })
    it('Checkout Page - eCommerce', function () {
        var sum = 0
        checkOut.productPrice().each((price, index) => {
            const totalPrice = price.text()
            var res = totalPrice.split(' ')
            res = Number(res[1].trim())
            cy.log(res)
            sum = sum + res
        }).then(function () {
            cy.log(sum)
        })
        checkOut.cartPrice().then((element) => {
            const value = element.text()
            var totalValue = value.split(' ')
            totalValue = Number(totalValue[1].trim())
            expect(sum).to.equal(totalValue)
        })
        checkOut.checkOutSubmit().click()
        Cypress.config('defaultCommandTimeout', 8000)
        checkOut.getCountry().type(data.deliveryLocation)
        cy.wait(5000)
        checkOut.selectCountry().click()
        checkOut.agreeCheckbox().click({ force: true })
        checkOut.purchaseButton().click()
        checkOut.successMessage().then((message) => {
            const success = message.text()
            expect(success.includes('Success')).to.be.true
        })
    })
})