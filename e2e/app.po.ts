import { browser, by, element } from 'protractor';

export class Ng4WBackPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getMyComponentParagrapthText(){
    return element(by.css('app-cmp-my p')).getText();
  }
}
