describe('employee details', () => {
    it('create employee details', () => {
      cy.visit('https://www.launchableinc.com/blog/?hsa_ver=3&utm_medium=ppc&hsa_ad=625371696957&hsa_acc=1405312405&hsa_grp=144936496987&hsa_kw=automation%20testing%20using%20selenium&utm_source=adwords&hsa_mt=b&gclid=Cj0KCQjwy5maBhDdARIsAMxrkw1OeYG_ZKFz_YEoKdgk6gJJxyzXbvwZOnyZIK4dUQ_MYiMfrRjGm2gaAjYHEALw_wcB&utm_term=automation%20testing%20using%20selenium&hsa_tgt=kwd-43665485660&hsa_src=g&hsa_net=adwords&hsa_cam=18477255987&utm_campaign=Selenium')

      cy.get('.nav_navbar__yc_Gk > .nav_cta__b3RnT > .btn-secondary').click()
    })
  })