describe("go to KTO CIĘ NAUCZY SECTION and take a screenshot", () => {
  it("visit main page", function () {
    cy.visit("https://fabrykatestow.pl");
    cy.get(".elementor-button-text").contains("POKAŻ CZEGO SIĘ NAUCZĘ").click();
    cy.get(".elementor-widget-container")
      .contains("Kto nauczy Cię testów automatycznych?")
      .scrollIntoView();
    cy.get(".elementor-widget-container")
      .contains("Kto nauczy Cię testów automatycznych?")
      .screenshot("home/kwaliszewski/Screen/screen.png");
  });
});
