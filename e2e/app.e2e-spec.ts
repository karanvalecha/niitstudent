import { NiitstudentPage } from './app.po';

describe('niitstudent App', () => {
  let page: NiitstudentPage;

  beforeEach(() => {
    page = new NiitstudentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
