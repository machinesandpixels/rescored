describe("Renders HomePage component", () => {
    it("...Render successful", () => {
        cy.visit("/");
    });

    it("...Checks H1 and its content", () => {
        cy.get('h1').should("exist");
        cy.get('h1').contains("Rebuild your Credit Score");
    });

    // Failing Test Case
    it("...Checks H1 and its content", () => {
        cy.get('h1').should("exist");
        cy.get('h1').contains("Hello World");
    });
});

