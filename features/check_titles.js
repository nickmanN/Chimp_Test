module.exports = function () {  
 'use strict';


  this.Given(/^I am on the site$/, function () {
    browser.url('http://www.cnet.com/');
  });


  this.When(/^I see title "([^"]*)"$/, function (arg1) {
    var title = browser.getTitle();
    expect(title).toEqual(arg1);
  });


  this.Then(/^I click on "([^"]*)" button$/, function (arg1) {
    browser.click("*=News");
  });


  this.Then(/^see title "([^"]*)"$/, function (arg1) {
	var title = browser.getTitle();
	expect(title).toEqual(arg1);
  });
};


// /features/check_titles.js