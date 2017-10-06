const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    Key = webdriver.Key;

const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;
const service = new chrome.ServiceBuilder(path).build();

chrome.setDefaultService(service);

async function searchOnGoogle(word) {
    let driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();

    await driver.get('http://www.google.com/');
    await driver.findElement(By.name('q')).sendKeys(word);
    await driver.findElement(By.name('q')).sendKeys(Key.ENTER);
    await driver.sleep(1500);
    await driver.quit();
}

searchOnGoogle('arctic monkeys')
    .then(() => console.log('done'));
