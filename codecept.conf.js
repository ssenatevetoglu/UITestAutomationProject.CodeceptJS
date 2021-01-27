const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.n11.com/giris-yap',
      show: true,
      //restart: false,
      chrome: {
        args: ['--no-sandbox', '--window-size=1440,900']
      },
      windowSize: '1440x900',
      waitForNavigation: ['domcontentloaded', 'networkidle0'],
      waitForTimeout: 120000,
      waitForAction: 501
    }
  },
  include: {
    I: './steps_file.js',
    //pages
    addToCartPage: './pages/add_to_cart.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'SSAutomation',
  plugins: {
    autoLogin: {
      enabled: true,
      saveToFile: false,
      inject: 'login',
      users: {
        user: {
          login: (I) => I.login('xxx.gmail.com', 'SetYourPassword'),
          check: (I) => I.amSignedIn('User Name')
        }
      }
    },

    "allure": {
      "enabled": true
    },

    "stepByStepReport": {
      "enabled": false,
      "screenshotsForAllureReport": true
    },

    'screenshotOnFail': {
      'enabled': true,
      'fullPageScreenshots': true
    }
  }

}