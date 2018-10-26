const urlChanged = function(url) {
    return function () {
      return browser.getCurrentUrl().then(function(actualUrl) {
        return url != actualUrl && !actualUrl.includes("index");
      });
    };
  };
const baseUrl = "http://192.168.31.13:9080";
describe('Init tests of CSDR test server', function () {
    browser.ignoreSyncronization=true;

    it('Open login screen of CSDR', () => {
        console.log("opening home page ... ")
        browser.get(baseUrl);
        console.log('redirected to index of login ...')
    });
    it('enter creditials', () => {
        console.log("filling login fields... ");
        const username = element(by.name("username"));
        const password = element(by.name("password"));
        const submit_button = element(by.css("form > button"));
        username.sendKeys('admin');
        password.sendKeys('Tp123456!');
        submit_button.click();
        browser.wait(urlChanged(baseUrl), 3000); 

        console.log("attempt to login... ");
        browser.sleep(5000);
        let success = false;
        if (urlChanged(baseUrl)) {
            success = true
            console.log("Logged in succesfully :)");
        } else {
            console.log("Log in failed :( ");
        }
        expect(success).toBe(true);
    });

    it('check IAMAS', () => {
        const searchIcon = element(by.css(".search-container label"));
        const searchInput = element(by.id("operation_autocomplete"));

        searchIcon.click();
        debugger;
        searchInput.sendKeys("1401");

        const searchResults = element(by.css('.md-autocomplete-suggestions li'));
        searchResults.click();

        browser.sleep(5000);

    });
});