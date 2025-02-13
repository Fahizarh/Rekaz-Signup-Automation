const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "https://rekaz.io/",
    viewportWidth: 1440,
    viewportHeight: 800,
    defaultCommandTimeout: 20000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {},
  },
});
