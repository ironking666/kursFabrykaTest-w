const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      specPattern: [
        "cypress/e2e/HWModule_5.cy.js",
        "cypress/e2e/HWModule_6.cy.js",
      ];
    },
  },
});
