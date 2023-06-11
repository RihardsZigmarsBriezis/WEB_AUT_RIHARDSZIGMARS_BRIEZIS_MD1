class GridPage{
    static get grid(){
        return cy.get("#demo-tab-grid");
    }
    static get one(){
        return cy.contains('li','One');
    }
    static get two(){
        return cy.contains('li','Two');
    }
    static get three(){
        return cy.contains('li','Three');
    }
    static get four(){
        return cy.contains('li','Four');
    }
    static get five(){
        return cy.contains('li','Five');
    }
    static get six(){
        return cy.contains('li','Six');
    }
    static get seven(){
        return cy.contains('li','Seven');
    }
    static get eight(){
        return cy.contains('li','Eight');
    }
    static get nine(){
        return cy.contains('li','Nine');
    }
}
export default GridPage;