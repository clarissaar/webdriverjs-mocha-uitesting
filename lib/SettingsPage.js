/**
 * Created by rodrigc on 02/06/2016.
 */

var assert = require('assert');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;

exports.changeLeadStatuses = function (driver, oldStatus, newStatus) {

    driver.wait(until.elementLocated(By.css('.user-avatar')), 1000).then(function(elm) {
        elm.click();
    });

    driver.sleep(1000);
    driver.findElement(By.xpath("//li[@class='leads']//a[@href='/settings/leads']")).click();
    driver.findElement(By.xpath('//*[@data-toggle="lead-status"]')).click();

    driver.findElement(By.xpath("//*[@class='control-group item']//*[contains(text(),'" + oldStatus + "')]/../..//button")).click();
    driver.findElement(By.xpath("//*[@class='item form']//*[@data-current-value='" + oldStatus + "']")).sendKeys(newStatus);
    driver.findElement(By.xpath("//*[@class='item form']//*[@data-current-value='" + oldStatus + "']/../../..//button")).click();
}