const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // "specPattern": "**/*.feature",
    'videoCompression': 30,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index')(on, config)
    },
  },
});
