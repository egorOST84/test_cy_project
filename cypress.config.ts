import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "test_cy_project",
  includeShadowDom: true,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.paylocity.com/',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    defaultCommandTimeout: 10000,
    viewportWidth: 1024,
    viewportHeight: 768
  },
})
