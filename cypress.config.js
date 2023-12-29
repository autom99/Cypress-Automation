const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8m84mb',
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/e2e-reports/json-report",
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    screenshotsFolder: "cypress/e2e-reports/assets/failed-screenshots",
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    pageLoadTimeout: 9000,
    screenshotOnRunFailure: true,
    overwrite: false,
    video: false,
    retries: 0,
    setupNodeEvents(on, config) {
      require("cypress-failed-log/on")(on);
      on("task", {
        sendMail(message) {
          return sendAnEmail(message);
        },
      });
    },
  },
});
