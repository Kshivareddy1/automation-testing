import ProtoCommerce from "../../page/ClintPO/ProtoCommerce.po"
import ProtoCommerceShop from "../../page/ClintPO/ProtoCommerceShop.po";

const protoCommerc = new ProtoCommerce();
const protoCommercShop = new ProtoCommerceShop();

var iphone1;
var Samsung1;
var nokia1
var blockBerry1
var total1;
describe('working with ProtoCommerce ', () => {

    beforeEach(function () {
        // executes prior each test within it block
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
    })

    it.skip('ProtoCommerce details page ', () => {

        // Create a ProtoCommerce account
        //enter full name 
        protoCommerc.NameInput().type('shivareddy')

        //enter email
        protoCommerc.emailInput().type('shivareddy@gmail.com')

        // create password
        protoCommerc.password().type('shivareddy@123')
        // select check box
        protoCommerc.checkBox().check()

        //select dropdown (gender)
        protoCommerc.dropDown().select('Male')

        //select radio button
        protoCommerc.radioBtn().check()

        //enter date of birth
        protoCommerc.dateOfBirth().type('1993-06-25')

        //click submit btn
        protoCommerc.submitBtn().click()

        //verify success Msg
        protoCommerc.successMsg().should('be.visible')

        //  working with ProtoCommerceShop 


    })
    it('ProtoCommerce shop page ', () => {

        //click the Shop menu 
        protoCommercShop.shopMenu().click();

        // iphoneX add to cart ,click add Btn
        protoCommercShop.addBtn1().click()
        // Samsung Note 8 add to cart ,click add Btn
        protoCommercShop.addBtn2().click()
        // Nokia Edge add to cart ,click add Btn
        protoCommercShop.addBtn3().click()
        // Blackberry add to cart ,click add Btn
        protoCommercShop.addBtn4().click()
        //click checkout btn
        protoCommercShop.checkout().click()
        //
        cy.get(':nth-child(1) > :nth-child(3) > strong').then(function (text1) {
            cy.log(text1.text())
            var prise1 = text1.text()
            var iphone = prise1.substring(3, prise1.length)
            cy.log(iphone)
             iphone1 = Number(iphone)
        })
        cy.get(':nth-child(2) > :nth-child(3) > strong').then(function (text2) {
            cy.log(text2.text())
            var prise2 = text2.text()
            var Samsung = prise2.substring(3, prise2.length)
            cy.log(Samsung)
             Samsung1 = Number(Samsung)

        })
        cy.get(':nth-child(3) > :nth-child(3) > strong').then(function (text3) {
            cy.log(text3.text())
            var prise3 = text3.text()
            var nokia = prise3.substring(3, prise3.length)
            cy.log(nokia)
             nokia1 = Number(nokia)
        })
        cy.get(':nth-child(4) > :nth-child(3) > strong').then(function (text4) {
            cy.log(text4.text())
            var prise4 = text4.text()
            var blockBerry = prise4.substring(3, prise4.length)
            cy.log(blockBerry)
             blockBerry1 = Number(blockBerry)
            cy.log(typeof(blockBerry1))

            const sumOnHand = blockBerry1 + blockBerry1
            cy.log(sumOnHand)
        })
        cy.get('h3 > strong').then(function (text5) {
             
            var prise5 = text5.text()
            var total = prise5.substring(3, prise5.length)
            cy.log(total)
             total1 = Number(total)
             expect((iphone1+Samsung1+nokia1+blockBerry1)).to.equal(total1)
        })
           
        

    });

});