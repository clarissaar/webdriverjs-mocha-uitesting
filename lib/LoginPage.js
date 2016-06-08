/**
 * Created by rodrigc on 02/06/2016.
 */
var webdriver = require('selenium-webdriver');
var By = webdriver.By;

exports.login = function (driver, email, password) {
    driver.get('https://core.futuresimple.com/sales/users/login?');
    driver.findElement(By.id('user_email')).sendKeys(email);
    driver.findElement(By.id('user_password')).sendKeys(password);
    driver.findElement(By.css('#user_new .btn-primary')).click();
}
