var assert = require('assert');
var webdriver = require('selenium-webdriver');
var LoginPage = require('../lib/LoginPage.js');
var LeadsPage = require('../lib/LeadsPage.js');
var SettingsPage = require('../lib/SettingsPage.js');

describe('getBase App', function () {
    this.timeout(60000);
    var driver;

    before(function () {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        driver.manage().window().maximize();

    });

    after(function () {
        LeadsPage.deleteLead(driver, 'John', 'M');
        driver.quit();
    });

    it('should login successfully', function (done) {
        LoginPage.login(driver, 'emailtest657@gmail.com', 'emailtest6572016');

        driver.call(function () {
            done();
        });
    });

    it('should create a new lead', function (done) {
        LeadsPage.createLead(driver, 'John', 'M', 'Comp', 'New');

        driver.call(function () {
            done();
        });
    });

    it('should change from "New" to "ChangedNew" Label on Lead Statuses Page', function (done) {
        SettingsPage.changeLeadStatuses(driver, 'New', 'ChangedNew');

        driver.call(function () {
            done();
        });
    });

    it('should verify that the lead created has the new status "ChangedNew"', function (done) {
        LeadsPage.verifyLeadStatus(driver, 'John', 'M', 'ChangedNew');

        driver.call(function () {
            done();
        });
    });
});