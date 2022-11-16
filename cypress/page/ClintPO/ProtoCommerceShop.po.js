class ProtoCommerceShop {


    shopMenu() {

        return cy.get(':nth-child(2) > .nav-link')
    }

    addBtn1() {

        return cy.get(':nth-child(1) > .card > .card-footer > .btn')
    }
    addBtn2() {

        return cy.get(':nth-child(2) > .card > .card-footer > .btn')
    }
    addBtn3() {

        return cy.get(':nth-child(3) > .card > .card-footer > .btn')
    }
    addBtn4() {

        return cy.get(':nth-child(4) > .card > .card-footer > .btn')
    }
    checkout() {

        return cy.get('a[class="nav-link btn btn-primary"]')
    }


}

export default ProtoCommerceShop;