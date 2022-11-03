
describe("Drag and Drop", () => {

    beforeEach(() => {
      cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop');
    });
    
    it('should drag fried chicken to the order', () => {
      const dataTransfer = new DataTransfer();
  
      cy.get('#menu-fried-chicken').trigger('dragstart', {
        dataTransfer
        
      });
      cy.get('#plate').trigger('drop', {
        dataTransfer
        
      });

      cy.get('#plate').trigger('drop', {
        dataTransfer
        
      });
      
    });
    
    
    // it('should drag ice cream to the order', () => {
    //   cy.wait(5000)

    //   cy.get('#menu-ice-cream').drag('#plate-items');

    // });
  
  });                           