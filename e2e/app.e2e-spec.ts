import { TheDirectoryPage } from './app.po';

describe('the-directory App', function() {
  let page: TheDirectoryPage;

  beforeEach(() => {
    page = new TheDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
