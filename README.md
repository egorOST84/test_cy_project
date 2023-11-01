# **Sample** E2E test suite with Cypress

> **application under test:** https://www.paylocity.com/

:information_source: Learn how to write these tests. More info: [docs.cypress.io](https://docs.cypress.io/guides/end-to-end-testing/testing-your-app)

## :goal_net: Goals
- keep it simple
- tests are easily readable

## :gear: Setup

1. `git clone https://github.com/egorOST84/test_cy_project.git`
2. cd to `test_cy_project` folder and run `npm install`
   - All updates are done with the `npm ci` command. After cloning the repository, you can run this command.

## :bulb: Information
#### :test_tube: Tests
:file_folder: Tests are located in `cypress/e2e` folder

:file_folder: Custom commands are located in `./support` folder (`utils.ts`)

:file_folder: Function commands is located in `./src` folder (`getEmail.ts`)

:file_folder: Selectors are located in `cypress/pages` folder using page object model(POM) design pattern

#### :hammer_and_wrench: Configuration
Config files:
1. `cypress.config.ts` - Main config file where default behavior of Cypress can be modified. [More info](https://docs.cypress.io/guides/references/configuration)
2. `plugins/index.js` - Plugins file is where we can programmatically alter the resolved configuration [More info](https://docs.cypress.io/guides/tooling/plugins-guide#Use-Cases)

#### run test:
For running test in Chrome browser in headless mode `npm cypress run --browser=chrome --headless`

// to be supplemented