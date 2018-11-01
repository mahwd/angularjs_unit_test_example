'use strict';

exports.config = {
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    multiCapabilities: [{
        browserName: 'firefox',
        'moz:firefoxOptions': {
           args: [ "--headless" ]
         }
      }, {
            browserName: 'chrome',
            chromeOptions: {
               args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
             }
      }],
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },
    specs: ['unit/unit_tests.js']
};