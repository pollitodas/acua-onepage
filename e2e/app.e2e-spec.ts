import { AcuaOnepagePage } from './app.po';

describe('acua-onepage App', () => {
  let page: AcuaOnepagePage;

  beforeEach(() => {
    page = new AcuaOnepagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
