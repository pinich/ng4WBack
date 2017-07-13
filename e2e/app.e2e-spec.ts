import { Ng4WBackPage } from './app.po';

describe('ng4-wback App', () => {
  let page: Ng4WBackPage = new Ng4WBackPage();

  beforeEach(() => {
    //page = new Ng4WBackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it('should display the title of my component',() =>{
    page.navigateTo();
    let txt = page.getMyComponentParagrapthText();
    expect(txt).toEqual('cmp-my works!');
  });
});
