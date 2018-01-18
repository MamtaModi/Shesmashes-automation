var assert = require('assert');

describe('Login -', function() {
    it('Customer should not be able to login', function () {
        browser.url('http://develop-shesmashes-thehub.herokuapp.com');
        //browser.timeouts('pageLoad',10000);
		this.timeout(10000);
        var title = browser.getTitle();
        assert.equal(title, 'React App');
		
		browser.setValue("//*[@name='username']","12345232");
        browser.setValue("//*[@name='password']","customer1");
        browser.click(".button-line>div>button");
		browser.timeouts('implicit', 10000);
        browser.click(".dialog-ui>div>div>div>div:nth-child(3)>button"); // Event link
    });
});