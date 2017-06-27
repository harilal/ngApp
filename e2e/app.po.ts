import { browser, by, element } from 'protractor';

export class NgAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lm-root h1')).getText();
  }
}
