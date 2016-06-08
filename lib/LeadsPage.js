/**
 * Created by rodrigc on 02/06/2016.
 */

var assert = require('assert');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;

exports.createLead = function(driver, firstName, lastName, company, status) {
    driver.wait(until.elementsLocated(By.id('nav-leads')), 10000);
    driver.findElement(By.id('nav-leads')).click();
    driver.wait(until.elementLocated(By.id('leads-new')), 10000);
    driver.findElement(By.id('leads-new')).click();
    driver.findElement(By.id('lead-first-name')).sendKeys(firstName);
    driver.findElement(By.id('lead-last-name')).sendKeys(lastName);
    driver.findElement(By.id('lead-company-name')).sendKeys(company);
    driver.findElement(By.css('.save')).click();

    driver.wait(until.elementsLocated(By.css('.detail-title')), 10000);
    driver.wait(until.elementTextContains(driver.findElement(By.css('.detail-title')), firstName + ' ' + lastName));
    driver.wait(until.elementTextContains(driver.findElement(By.css('.lead-status')), status));
}



