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

exports.verifyLeadStatus = function(driver, firstName, lastName, status) {
    driver.wait(until.elementsLocated(By.id('nav-leads')), 10000);
    driver.findElement(By.id('nav-leads')).click();
    driver.findElement(By.xpath("//*[@class='object-list-items leads']//*[contains(., '" + firstName + " " + lastName + "')]//*[@class='lead-name']")).click();
  
    driver.wait(until.elementsLocated(By.xpath("//*[@class='status']//*[contains(., '" + status + "')]//*[(@class='lead-status')]")), 10000);
}

exports.deleteLead = function(driver, firstName, lastName) {
    driver.wait(until.elementsLocated(By.id('nav-leads')), 10000);
    driver.findElement(By.id('nav-leads')).click();
    driver.findElement(By.xpath("//*[@class='object-list-items leads']//*[contains(., '" + firstName + " " + lastName + "')]//*[@class='lead-name']")).click();
    driver.findElement(By.xpath("//*[@class='detail-title']//*[contains(., 'Edit')]//*[@class='btn btn-mini detail-edit']")).click();
    driver.findElement(By.css('.remove')).click();
    driver.findElement(By.css('.btn cancel')).click();
}

