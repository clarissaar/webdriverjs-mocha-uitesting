var assert = require('assert');
var webdriver = require('selenium-webdriver');
var LoginPage = require('../lib/LoginPage.js');
var LeadsPage = require('../lib/LeadsPage.js');
var SettingsPage = require('../lib/SettingsPage.js');

describe('getBase App', function () {
    this.timeout(50000);
    var driver;

    before(function (done) {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10 * 1000);

        driver.call(function () {
            done();
        });
    });

    after(function (done) {
        LeadsPage.deleteLead(driver, 'John', 'M');
        SettingsPage.changeLeadStatuses(driver, 'ChangedNew', 'New');
        driver.quit();

        driver.call(function () {
            done();
        });
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